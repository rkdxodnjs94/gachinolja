import { createSlice } from "@reduxjs/toolkit";

const Render = createSlice({
  name : 'render',
  initialState : false,
  reducers : {
    setRender(state){
      return !state;
    }
  }
});

export const { setRender } = Render.actions;

export default Render;