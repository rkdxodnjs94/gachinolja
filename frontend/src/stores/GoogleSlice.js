import { createSlice } from "@reduxjs/toolkit";

const googleUser = createSlice({
  name : 'googleUser',
  initialState : {},
  reducers : {
    setGoogleUser(state, action){
      return action.payload;
    }
  }
});

export const { setGoogleUser } = googleUser.actions;
export default googleUser;