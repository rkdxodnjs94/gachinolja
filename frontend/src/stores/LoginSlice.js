import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name : 'Login',
  initialState : false,
  reducers : {
    setLogin(state){
      return !state
    }
  }
})

export const { setLogin } = Login.actions

export default Login;