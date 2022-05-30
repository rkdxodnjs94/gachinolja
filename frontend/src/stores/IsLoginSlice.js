import { createSlice } from "@reduxjs/toolkit";

const IsLogin = createSlice({
  name : 'islogin',
  initialState : {
    userid : '',
    userpw : '',
    nickname : ''
  },
  reducers : {
    loginID(state, action){ // 전의 state, 지금의 state
      return {...state, userid : action.payload} // 원본, 서버에서 넘어온 정보를 여기에 넣어준 것
    },
    loginPW(state, action){
      return {...state, userpw : action.payload}
    },
    loginNICK(state, action){
      return {...state, nickname : action.payload}
    }
  }
})

export const { loginID, loginPW, loginNICK } = IsLogin.actions;
export default IsLogin;