import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IShippingField } from '../../App.interface';
import SvgSpriteTrash from '../svg/svgSpriteTrash';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { removeItem } from '../../store/reducers/advStage';
import { Props } from 'react-select';
import { setDataAdvStages } from '../../store/reducers/dataStages';



const FormAdvantageInput = (props: Props) => {

    const dispatch = useDispatch<AppDispatch>();

    const { register, formState: { errors }, handleSubmit } = useForm<IShippingField>({
        mode: 'onSubmit'
    })

    const hanldeDelete = () => {
        dispatch(removeItem(props.id))
    }

    const onSubmit: SubmitHandler<IShippingField> = data => {
        dispatch(setDataAdvStages([data.advantage]))
    }

    return (
        <div className='content'>
            <input type="text" placeholder='your advantage'
                key={props.id}
                className='input_adv'
                {...register("advantage", {
                    required: 'Это обязательное поле!',
                })} />
            <div className="trash_container">
                <SvgSpriteTrash hanldeDeleteProp={() => hanldeDelete()} />
            </div>
            {
                errors &&
                <div style={{ color: 'red' }}>
                    {errors.advantage?.message}
                </div>
            }
        </div>
    )
}

export default FormAdvantageInput