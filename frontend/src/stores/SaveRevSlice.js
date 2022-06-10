// 자리 데이터를 저장하는 state입니다.
// 초기 state : []
// 수정 state : [1,2,...]
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const SaveReserve = createSlice({
  name : 'savereserve',
  initialState,
  reducers : {
    setSaveArg(state, action){
      state.push(action.payload);
    },
    setSavePbID(state, action){
      state.push(action.payload);
    },
    setSaveDate(state, action){
      state.push(action.payload);
    },
    clear : () => initialState
  }
});

export const { clear, setSaveArg, setSavePbID, setSaveDate } = SaveReserve.actions;

export default SaveReserve;