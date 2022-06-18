// 자리 데이터를 저장하는 state입니다.
// 초기 state : []
// 수정 state : [arrage,publisherID,Date]
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
    setArray(state, action){
      const result = [];
      for (let i=0; i<state.length; i+=3){
        result.push(state.slice(i, i+3));
      }
      return result;
    },
    clear : () => initialState
  }
});

export const { clear, setSaveArg, setSavePbID, setSaveDate, setArray } = SaveReserve.actions;

export default SaveReserve;