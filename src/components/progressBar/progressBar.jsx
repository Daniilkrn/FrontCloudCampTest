import React, { useRef } from 'react'
import '../../styles/progressBar.scss'
import { useDispatch, useSelector } from 'react-redux'
import {MdOutlineDone} from 'react-icons/md'

const ProgressBar = () => {

  const currentStagePB = useSelector(state => state.stagesPB.currentStage);

  const refSpanStage = useRef();
  const refWrapperStage = useRef();
  const refWrapperStage2 = useRef();

  const dispatch = useDispatch();

  React.useEffect(() => {
    document.querySelectorAll('.spanactive').forEach(el => {
      if(currentStagePB == 2){
        refWrapperStage.current.style.background = '#5558FA'
        
      } 
      if(currentStagePB == 3){
        refWrapperStage2.current.style.display = 'block' 
        refWrapperStage.current.style.display = 'none' 
        refWrapperStage2.current.style.background = '#5558FA'
      } 
      el.id == currentStagePB ? el.style = 'border: 8px solid #5558FA; background: white' : el.style = 'border: none';
      el.id < currentStagePB ? el.style.background = '#5558FA' : el.style.background = '#fffff'
      
    })
  },[currentStagePB])

  return (
    <div className='progressBar'>
      <div className="wrapper_progressBar">
        <div className="fillWrapper"  ref={refWrapperStage}></div>
        <div className="fillWrapper2"  ref={refWrapperStage2}></div>
      </div>
      <div className="stages">
        <span id='1' ref={refSpanStage} className={currentStagePB ? 'spanactive' : null}>
          {
            currentStagePB >= 2 ? <MdOutlineDone className='done'/> : null
          }
        </span>
        <span id='2' ref={refSpanStage} className={currentStagePB ? 'spanactive' : null}>
          {
            currentStagePB == 3 ? <MdOutlineDone className='done'/> : null
          }
        </span>
        <span id='3' ref={refSpanStage} className={currentStagePB ? 'spanactive' : null}></span>
      </div>
    </div>
  )
}

export default ProgressBar