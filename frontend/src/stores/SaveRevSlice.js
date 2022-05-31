// 자리 데이터를 저장하는 state입니다.
import { createSlice } from "@reduxjs/toolkit";

const SaveReserve = createSlice({
  name : 'savereserve',
  initialState : [],
  reducers : {
    setSaveReserve(state, action){
      const setstate = [...state, action.payload];
      return setstate.filter(function(item, idx){
        return setstate.indexOf(item) === idx;
      });
    }
  }
});

export const { setSaveReserve } = SaveReserve.actions;

export default SaveReserve;