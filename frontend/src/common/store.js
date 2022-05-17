import { configureStore } from "@reduxjs/toolkit";
// 로그인 state용
import login from '../stores/LoginSlice';

export default configureStore({
  reducer : {
    login : login.reducer,
  }
})