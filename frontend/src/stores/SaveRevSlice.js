// 자리 데이터를 저장하는 state입니다.
import { createSlice } from "@reduxjs/toolkit";

const SaveReserve = createSlice({
  name : 'savereserve',
  initialState : [],
  reducers : {
    setSaveReserve(state, action){
      state.push((action.payload));
      return state[action.payload];
    }
  }
});

export const { setSaveReserve } = SaveReserve.actions;

export default SaveReserve;