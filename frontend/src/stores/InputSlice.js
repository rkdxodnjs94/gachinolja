import { createSlice } from "@reduxjs/toolkit";

const Input = createSlice({
  name : 'Input',
  initialState : '',
  reducers : {
    setInput(state, action){
      return action.payload
    }
  }
})

export const { setInput } = Input.actions;
export default Input;