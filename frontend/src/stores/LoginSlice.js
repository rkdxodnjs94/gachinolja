import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name : 'Login',
  initialState : false,
  reducers : {
    setLogin(state,action){
      return action.payload;
    }
  }
})

export const { setLogin } = Login.actions

export default Login;