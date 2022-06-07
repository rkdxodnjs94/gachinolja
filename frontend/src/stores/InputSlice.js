import { createSlice } from "@reduxjs/toolkit";

const initialState = '';
const Input = createSlice({
  name : 'Input',
  initialState,
  reducers : {
    setInput(state, action){
      return action.payload
    },
    clear : () => initialState
  }
})

export const { setInput, clear } = Input.actions;
export default Input;