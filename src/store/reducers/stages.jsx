import { createSlice } from '@reduxjs/toolkit'

export const stageSlice = createSlice({
  name: 'stagesPB',
  initialState: {
    currentStage: 1,
  },
  reducers: {
    setStagePB(state,action){
      state.currentStage = action.payload
    },
  },
})

export default stageSlice.reducer

export const {setStagePB} = stageSlice.actions