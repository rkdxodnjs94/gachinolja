// 자리 데이터를 저장하는 state입니다.
// 초기 state : []
// 수정 state : [ ['강남점',1,2,3..],['홍대점',1,2,3,...], ]
import { createSlice } from "@reduxjs/toolkit";

const SaveReserve = createSlice({
  name : 'savereserve',
  initialState : [],
  reducers : {
    setSavePlace(state, action){
      const arr = new Array(state.length).fill(state);
      arr.push(action.payload);
    },
    setSaveArg(state, action){
      const arr = new Array(state.length).fill(state);
      arr.push(action.payload);
    }
  }
});

export const { setSavePlace, setSaveArg } = SaveReserve.actions;

export default SaveReserve;