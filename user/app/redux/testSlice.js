import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import * as api from "./api";

// https://react-redux.js.org/tutorials/quick-start
export const login = createAsyncThunk(
  "auth/login",
  async ({ props }, { rejectWithValue }) => {
    try {
      //const response = await api.signIn({"email": "haj@haj.haj", "password": "password"});  
      const response = await api.get()
      props.navigation.navigate("Navigation")
      return response.data;
    } catch (err) {
      props.navigation.navigate("Navigation")
      return rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    authKey: "authkey",
    is_loading: true,
    error: null,
    location: null
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },    
    logout: (state) => {
      state.is_loading = true
      state.authKey = "null"
      AsyncStorage.removeItem("authKey")
      state.is_loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.is_loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.is_loading = false;
        console.log(action.payload)
        AsyncStorage.setItem("authKey", state.authKey)
        state.authKey.push("action.payload")
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload)
        state.is_loading = false;
        state.error = action.payload.message;
        state.authKey.push(":(")
      })
      .addCase(register.pending, (state, action) => {
        state.is_loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.is_loading = false;
        AsyncStorage.setItem("authKey", state.authKey)
        state.authKey = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.is_loading = false;
        state.error = action.payload.message;
      })
  },
})

export const { logout, setLocation } = testSlice.actions

export default testSlice.reducer