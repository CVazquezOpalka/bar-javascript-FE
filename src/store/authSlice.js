import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";

const initialState = {
  loggedin: false,
  user: null,
  jwt: null,
  loading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }, thunkApi) => {
    try {
      const response = await axiosURL.post("api/auth/local", {
        identifier,
        password,
      });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ username, email , password }, thunkApi) => {
    try {
      const response = await axiosURL.post("api/auth/local/register", {
        username,
        email,
        password,
      });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.loggedin = false;
      state.jwt = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state, action)=>{
      state.loading = true;
    })
    builder.addCase(userRegister.fulfilled, (state, action)=>{
      state.loading = false;
      state.loggedin = true;
      state.user = action.payload.data.user;
      state.jwt = action.payload.data.jwt;
    })
    builder.addCase(userRegister.rejected, (state, action)=>{
      state.loading = false;
    })
    builder.addCase(login.pending, (state, action) => {
      console.log("pending", action);
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loggedin = true;
      state.user = action.payload.data.user;
      state.jwt = action.payload.data.jwt;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected", action);
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice;
