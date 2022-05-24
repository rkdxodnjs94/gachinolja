import { configureStore } from "@reduxjs/toolkit";
// 로그인 state용
import login from '../stores/LoginSlice';
// 예약 state용
import reserve from '../stores/RevSlice';
// 예약데이터 state용
import revdata from '../stores/RevDataSlice';

export default configureStore({
  reducer : {
    login : login.reducer,
    reserve : reserve.reducer,
    revdata : revdata.reducer,
  }
})