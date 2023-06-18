import React from 'react'
import ProgressBar from '../progressBar/progressBar'
import '../../styles/createPage.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IShippingField } from '../../App.interface';
import { IOption } from '../../App.interface';
import ReactSelect from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setDataCreatePage } from '../../store/reducers/dataStages';
import { setStagePB } from '../../store/reducers/stages';
import { NavLink, useNavigate } from 'react-router-dom';
import useFormPersist from "react-hook-form-persist";

const options: IOption[] = [
  {
    value: 'Man',
    label: 'Man'
  },
  {
    value: 'Woman',
    label: 'Woman'
  },
]

const getValue = (value: string) => options.find((option => option.value === value))

const CreatePage = () => {

  const refForm = React.useRef<HTMLFormElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const dataCreatePage = useSelector((state: RootState) => state.stageDataSlice.createPage)
  const currentStagePB = useSelector((state: RootState) => state.stagesPB.currentStage);

  React.useEffect(() => {
    setValue('nickName', dataCreatePage[0])
    setValue('name', dataCreatePage[1])
    setValue('surname', dataCreatePage[2])
    setValue('sex', dataCreatePage[3])
  }, [])

  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, watch, control, setValue } = useForm<IShippingField>({
    mode: 'onSubmit'
  })

  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const onSubmit: SubmitHandler<IShippingField> = data => {
    dispatch(setDataCreatePage([data.nickName, data.name, data.surname, data.sex]))
  }

  React.useEffect(()=>{
    if(isSubmitSuccessful){
      navigate('/advantagePage') 
      dispatch(setStagePB(currentStagePB + 1))
    }
  },[isSubmitSuccessful])

  return (
    <div className='createPage'>
      <ProgressBar />
      <form action="" onSubmit={handleSubmit(onSubmit)} ref={refForm}>
        <label>Nickname
          <input type="text" placeholder='nickname'
            {...register("nickName", {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[a-zA-ZА-Яа-яёЁ0-9]+$/gmiu,
                message: 'спец. символы не допустимы!'
              },
              maxLength: {
                value: 30,
                message: `Количестов символов не больше 30!`
              }
            })} />
          {errors.nickName &&
            <div style={{ color: 'red' }}>
              {errors.nickName.message}
            </div>
          }
        </label>
        <label>Name
          <input type="text" placeholder='name'
            {...register('name', {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[а-яА-ЯЁёa-zA-Z]+$/gmi,
                message: 'допустимы только буквенные значения!'
              },
              maxLength: {
                value: 50,
                message: `Количестов символов не больше 50!`
              }
            })} />
          {errors.name &&
            <div style={{ color: 'red' }}>
              {errors.name.message}
            </div>
          }
        </label>
        <label>Surname
          <input type="text" placeholder='surname'
            {...register('surname', {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[а-яА-ЯЁёa-zA-Z]+$/gmi,
                message: 'допустимы только буквенные значения!'
              },
              maxLength: {
                value: 50,
                message: `Количестов символов не больше 50!`
              }
            })} />
          {errors.surname &&
            <div style={{ color: 'red' }}>
              {errors.surname.message}
            </div>
          }
        </label>
        <label>Sex
          <Controller
            control={control}
            name="sex"
            rules={{
              required: 'Это обязательное поле!',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <ReactSelect
                  options={options}
                  value={getValue(value)}
                  onChange={(newValue) => onChange((newValue as IOption).value)}
                />
                {error &&
                  <div style={{ color: 'red' }}>
                    {error?.message}
                  </div>
                }
              </>
            )}
          />
        </label>
        <div className="buttons_container">
          <NavLink to={'/'}>Назад</NavLink>
          <button>Далее</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePage