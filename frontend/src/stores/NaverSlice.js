import { createSlice } from "@reduxjs/toolkit";

const NaverUser = createSlice({
  name : 'NaverUser',
  initialState : {},
  reducers : {
    setNaverUser(state, action){
      return action.payload;
    }
  }
});

export const { setNaverUser } = NaverUser.actions;
export default NaverUser;