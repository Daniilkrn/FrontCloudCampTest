import { createSlice } from '@reduxjs/toolkit'

export const advStages = createSlice({
  name: 'advStages',
  initialState: {
    // stateStage: Array.from({length: 3}, (v,k) => {
    //     return {id: k};
    // })
    stateStage: []
  },
  reducers: {
    addItem(state,action){
        state.stateStage.push({
            id: new Date().toISOString(),
        })
    },
    removeItem(state,action){
        state.stateStage = state.stateStage.filter(el => el.id !== action.payload.id)
    }
  },
})

export default advStages.reducer

export const {addItem,removeItem} = advStages.actions