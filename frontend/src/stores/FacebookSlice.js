import { createSlice } from "@reduxjs/toolkit";

const facebookUser = createSlice({
  name : 'facebookUser',
  initialState : {},
  reducers : {
    setFacebookUser(state, action){
      return action.payload;
    }
  }
});

export const { setFacebookUser } = facebookUser.actions;
export default facebookUser;