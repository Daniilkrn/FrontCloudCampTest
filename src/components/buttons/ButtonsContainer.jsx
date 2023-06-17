import React from 'react'
import { NavLink } from "react-router-dom";
import '../../styles/createPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setStagePB } from '../../store/reducers/stages';
import '../../styles/buttons.scss'

const stageRoutes = ['/', '/createPage', '/advantagePage', '/aboutPage']

const ButtonsContainer = ({ handleSubmitProp, isSubmitSuccessful, }) => {

    const currentStagePB = useSelector(state => state.stagesPB.currentStage);
    const dispatch = useDispatch();

    const [, setModal] = React.useState(false)

    const handleSubmit = () => {
        handleSubmitProp()
    }

    return (
        <div className="buttons_container">
            {
                currentStagePB === 1 ?

                    <NavLink to={currentStagePB === 1 ? stageRoutes[currentStagePB - 1] : stageRoutes[currentStagePB]} onClick={() => {

                    }}>Назад</NavLink>

                    :
                    null
            }
            {
                currentStagePB === 2 ?
                    <NavLink to={currentStagePB > 1 ? stageRoutes[currentStagePB - 1] : stageRoutes[currentStagePB]} onClick={() => {

                        if (currentStagePB > 1) dispatch(setStagePB(currentStagePB - 1))
                    }}>Назад</NavLink>
                    :
                    null
            }
            {
                currentStagePB === 3 ?
                    <NavLink to={stageRoutes[stageRoutes.length - 1]} onClick={() => {
                        setModal(true)
                        handleSubmit()
                    }}>Отправить</NavLink>
                    :
                    <button
                        onClick={() => {
                            handleSubmit()
                            // if (isSubmitSuccessful) {
                            //     console.log('if');
                            //     dispatch(setStagePB(currentStagePB + 1))
                            // }
                        }}>Далее
                    </button>
            }
        </div>
    )
}

export default ButtonsContainer