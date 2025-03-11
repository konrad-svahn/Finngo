import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './testSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})