import React from 'react'
import Close from './close'
import { useNavigate } from 'react-router-dom'

interface PropsModal{
    clearPersist?:  () => void,
    title: string | null,
    children: React.ReactNode ,
    modal: boolean
    setModal:any,
    status: boolean | null
}

const ModalConfirm = ({ children, modal, setModal, title, status, clearPersist}:PropsModal) => {

    const navigate = useNavigate();

    return (
        <div className={modal ? "modalConfirm_wrapper active" : "modalConfirm_wrapper"} onClick={() => {
            setModal(false)
            if(clearPersist) clearPersist()
            navigate("/")
        }}>
            <div className="modalConfirm" onClick={(e) => {
                e.stopPropagation()
            }}>
                {status ?
                    <div className="title confirm">
                        <h2>{title}</h2>
                    </div>
                    :
                    <div className={modal ? "close_container active" : "close_container"}>
                        <div className="title error">
                            <h2>{title}</h2>
                        </div>
                        <Close modal={modal} setModal={setModal}></Close>
                    </div>
                }

                {children}
            </div>
        </div>
    )
}

export default ModalConfirm