import { createSlice } from "@reduxjs/toolkit";

const KakaoUser = createSlice({
  name : 'KakaoUser',
  initialState : {},
  reducers : {
    setKakaoUser(state, action){
      return action.payload;
    }
  }
});

export const { setKakaoUser } = KakaoUser.actions;
export default KakaoUser;