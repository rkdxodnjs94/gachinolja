import { configureStore } from "@reduxjs/toolkit";
// 로그인 state용
import login from '../stores/LoginSlice';
import islogin from '../stores/IsLoginSlice';
// 예약 state용
import reserve from '../stores/RevSlice';
import savereserve from '../stores/SaveRevSlice';
// 예약데이터 state용
import revdata from '../stores/RevDataSlice';
// Fade state용
import fade from '../stores/FadeSlice';

export default configureStore({
  reducer : {
    login : login.reducer,
    islogin : islogin.reducer,
    reserve : reserve.reducer,
    savereserve : savereserve.reducer,
    revdata : revdata.reducer,
    fade : fade.reducer,
  }
})