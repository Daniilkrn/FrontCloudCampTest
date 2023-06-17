import '../../styles/helpers.scss'

const Close = ({modal,setModal}) => {
    return (
        <div className="close" onClick={()=>{
            if(modal) setModal(false) 
         }}>
            <span></span>
        </div>
    )
}

export default Close