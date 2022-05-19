import { createSlice } from "@reduxjs/toolkit";

const Reserve = createSlice({
  name : 'reserve',
  initialState : [],
  reducers : {
    setReserve(state, action){
      state.splice(0, state.length);
      state.push((action.payload));
      return state[action.payload];
    }
  }
});

export const { setReserve } = Reserve.actions;

export default Reserve;