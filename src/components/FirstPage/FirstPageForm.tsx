import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IShippingField } from '../../App.interface';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { InputPhone } from '../input/phoneMask';
import '../../styles/main.scss'
import '../../styles/startPage.scss'
import { AppDispatch, RootState } from '../../store/store';
import { setAllDataStage, setDataStages } from '../../store/reducers/dataStages';

const FirstPageForm = () => {

    const dispatch = useDispatch<AppDispatch>();
    const dataFirstPage = useSelector((state: RootState) => state.stageDataSlice.firstPage)

    React.useEffect(() => {
        setValue('phone', dataFirstPage[0])
        setValue('email', dataFirstPage[1])
    }, [])

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<IShippingField>({
        mode: 'onSubmit'
    })

    const onSubmit: SubmitHandler<IShippingField> = data => {
        dispatch(setDataStages([data.phone, data.email]))
        navigate("/createPage")
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label>Номер телефона</label>
            <InputPhone type='phone' placeholder='+7 999 999-99-99'
                {...register("phone", {
                    required: 'Это обязательное поле!',
                    minLength: {
                        value: 18,
                        message: `Введите валидный номер телефона!`
                    }
                })}
            />
            {errors.phone &&
                <div style={{ color: 'red' }}>
                    {errors.phone.message}
                </div>
            }
            <label>Email</label>
            <input type="text" placeholder='tim.jennings@example.com'
                {...register('email', {
                    required: 'Это обязательное поле!',
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Введите валидный e-mail'
                    }
                })} />
            {errors.email &&
                <div style={{ color: 'red' }}>
                    {errors.email.message}
                </div>
            }
            <div className="btn_container">
                <button>Начать</button>
            </div>
        </form>
    )
}

export default FirstPageForm