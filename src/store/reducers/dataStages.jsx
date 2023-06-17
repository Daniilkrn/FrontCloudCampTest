import { createSlice } from '@reduxjs/toolkit'

export const dataStages = createSlice({
  name: 'dataStages',
  initialState: {
    firstPage: [],
    createPage: [],
    advantagePage: [],
    aboutPage: [],
    allStage: []
  },
  reducers: {
    setDataStages(state,action){
      state.firstPage = action.payload
    },
    setDataCreatePage(state,action){
      state.createPage = action.payload
    },
    setDataAdvStages(state,action){
      state.advantagePage = action.payload
    },
    setDataAboutPage(state,action){
      state.aboutPage = action.payload
    },
    setAllDataStage(state,action){
      console.log(action.payload);
      state.allStage = [state.firstPage,state.createPage,state.advantagePage,action.payload]
    }
  },
})

export default dataStages.reducer

export const {setDataStages,setDataCreatePage,setDataAdvStages,setDataAboutPage, setAllDataStage} = dataStages.actions