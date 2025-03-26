import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'

// https://react-redux.js.org/tutorials/quick-start
export const testSlice = createSlice({
  name: 'test',
  initialState: {
    authKey: "authkey",
    is_loading: true,
  },
  reducers: {
    setStateTo: (state, action) => {
      state.authKey = action.payload
    },
    login: (state) => {
      state.is_loading = true
      state.authKey = ";)"
      AsyncStorage.setItem("authKey", state.authKey)
      state.is_loading = false
    },    
    logout: (state) => {
      state.is_loading = true
      state.authKey = "null"
      AsyncStorage.removeItem("authKey")
      state.is_loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout,  setStateTo} = testSlice.actions

export default testSlice.reducer