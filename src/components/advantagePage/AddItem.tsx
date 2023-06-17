import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const AddItem = ({hanldeClickAddProp}:any) => {

    const handleClickAdd = () => {
        hanldeClickAddProp()
    }

    return (
        <div className='addItem' onClick={() => {
            handleClickAdd()
        }}>
            <span>+</span>
        </div>
    )
}

export default AddItem