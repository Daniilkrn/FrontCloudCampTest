import React from 'react'
import ProgressBar from '../progressBar/progressBar'
import ModalConfirm from '../Helpers/modal'
import SvgSpriteConfirm from '../svg/svgSpriteConfirm'
import SvgSpriteError from '../svg/SvgSpriteError'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IShippingField, } from '../../App.interface';
import '../../styles/aboutPage.scss'
import axios from 'axios'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setAllDataStage, setDataAboutPage, setDataAdvStages, setDataCreatePage, setDataStages } from '../../store/reducers/dataStages'
import { setStagePB } from '../../store/reducers/stages'

const AboutPage = () => {

    const navigate = useNavigate();
    const [status, setStatus] = React.useState(false)
    const [messageStatus, setMessageStatus] = React.useState(null)
    const [modal, setModal] = React.useState(false)
    const [maxLengthArea, setMaxLengthArea] = React.useState<number | undefined>()

    const dispatch = useDispatch<AppDispatch>();
    const dataAll = useSelector((state: RootState) => state.stageDataSlice.allStage)

    const refForm = React.useRef<HTMLFormElement>(null);

    const currentStagePB = useSelector((state: RootState) => state.stagesPB.currentStage);

    const { register, handleSubmit, formState: { errors, }, reset, watch, } = useForm<IShippingField>({
        mode: "onSubmit"
    })

    const onSubmit: SubmitHandler<IShippingField> = async data => {
        dispatch(setAllDataStage([data.area]))
        setModal(true)
        try {
            await axios.post("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
                body: dataAll
            })
                .then(response => {
                    if (response.data.status) setMessageStatus(response.data.message)
                })
                .catch(() => {
                    setStatus(true)
                })
        } catch (error) {

        }
    }

    const prevHandler = () => {
        dispatch(setStagePB(currentStagePB - 1))
    }

    React.useEffect(() => {
        const sub = watch((value, { name, type }) => setMaxLengthArea(value.area?.replaceAll(/\s/gi, '').length))
        return () => sub.unsubscribe()
    }, [watch])

    const clearPersist = () => {
        reset()
        dispatch(setDataAboutPage([]))
        dispatch(setDataAdvStages([]))   
        dispatch(setDataCreatePage([]))
        dispatch(setDataStages([]))
        dispatch(setStagePB(1))
        dispatch(setAllDataStage([]))
        localStorage.clear()
    }

    return (
        <div className='aboutPage'>
            <ProgressBar />
            <form action="" ref={refForm} onSubmit={handleSubmit(onSubmit)}>
                <label>About</label>
                <textarea placeholder='About me'
                    {...register("area", {
                        required: 'Это обязательное поле!',
                        maxLength: {
                            value: 200,
                            message: `Количестов символов не больше 200!`
                        },
                        validate: (value) => {
                            return !!value?.trim()
                        },
                    })}
                >
                </textarea>
                <div className="count">{maxLengthArea}</div>
                {errors.area &&
                    <div style={{ color: 'red' }}>
                        {errors.area.message}
                    </div>
                }
                <div className="buttons_container">
                    <NavLink to={'/advantagePage'} onClick={prevHandler}>Назад</NavLink>
                    <button>Отправить</button>
                </div>
                {
                    messageStatus &&
                    <ModalConfirm modal={modal} setModal={setModal} title={!status ? messageStatus : messageStatus} status={messageStatus} clearPersist={clearPersist} >
                        {
                            <>
                                <div className="icon_container">
                                    <div className="icon confirm">
                                        <SvgSpriteConfirm />
                                    </div>
                                </div>
                                <div className="btn_container confirm">
                                    <button onClick={() => {
                                        navigate("/")
                                        setModal(false)
                                        clearPersist()
                                    }
                                    }>На главную</button>
                                </div>
                            </>
                        }
                    </ModalConfirm>
                }
                {
                    status &&
                    <ModalConfirm modal={modal} setModal={setModal} title={!status ? 'Ошибка' : messageStatus} status={messageStatus} clearPersist={undefined}>
                        {
                            <>
                                <div className="icon_container">
                                    <div className="icon error">
                                        <SvgSpriteError />
                                    </div>
                                </div>
                                <div className="btn_container error">
                                    <button onClick={() => setModal(false)}>Закрыть</button>
                                </div>
                            </>
                        }
                    </ModalConfirm>
                }
            </form>
        </div>
    )
}

export default AboutPage