import { createSlice } from "@reduxjs/toolkit";

const Reserve = createSlice({
  name : 'reserve',
  initialState : '1',
  reducers : {
    setReserve(state, action){
      '';
      return Number(action.payload);
    }
  }
});

export const { setReserve } = Reserve.actions;

export default Reserve;