import React from 'react'
import ProgressBar from '../progressBar/progressBar'
import '../../styles/advantagePage.scss'
import Adv2 from './adv2';

import '../../styles/formAdv.scss'


export interface Props {
    id: number,
}

const AdvantagePage = () => {

    return (
        <div className='advantagePage'>
            <ProgressBar />
            <Adv2/>
        </div>
    )
}

export default AdvantagePage