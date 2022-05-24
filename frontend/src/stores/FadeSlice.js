import { createSlice } from "@reduxjs/toolkit";

const Fade = createSlice({
  name : 'Fade',
  initialState : '',
  reducers : {
    setFade(state, action){
      return action.payload;
    }
  }
})

export const { setFade } = Fade.actions;
export default Fade;