import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from "./api";

// https://react-redux.js.org/tutorials/quick-start
export const login = createAsyncThunk(
  "auth/login",
  async ({ props, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.signIn({email,password});  
      props.navigation.navigate("Navigation")
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ props, email, password, firstname, lastname}, { rejectWithValue }) => {
    try {
      const response = await api.signUp({email,password,firstname,lastname});  
      props.navigation.navigate("Navigation")
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    email: null,
    password: null,
    firstname: null,
    lastname: null,
    is_loading: true,
    error: null,
    location: null
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },  
    setEmail: (state, action) => {
      state.email = action.payload
    },  
    setPassword: (state, action) => {
      state.password = action.payload
    }, 
    setFirsName: (state, action) => {
      state.firstname = action.payload
    },  
    setLastName: (state, action) => {
      state.lastname = action.payload
    }, 
    logout: (state) => {
      state.is_loading = true
      AsyncStorage.removeItem("authKey")
      AsyncStorage.removeItem("user")
      state.email = null
      state.password = null
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
        AsyncStorage.setItem("authKey", action.payload.token)
        AsyncStorage.setItem("user",action.payload._id)
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload)
        state.is_loading = false;
        state.error = action.payload.message;
      })
      .addCase(register.pending, (state, action) => {
        state.is_loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.is_loading = false;
        AsyncStorage.setItem("authKey", action.payload.token)
        AsyncStorage.setItem("user",action.payload._id)
      })
      .addCase(register.rejected, (state, action) => {
        state.is_loading = false;
        state.error = action.payload.message;
      })
  },
})

export const { logout, setLocation, setEmail, setPassword, setFirsName, setLastName} = testSlice.actions

export default testSlice.reducer