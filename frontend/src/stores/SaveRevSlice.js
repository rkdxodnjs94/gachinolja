// 자리 데이터를 저장하는 state입니다.
// 초기 state : [ [] ]
// 수정 state : [ ['강남점',1,2,3,...],['홍대점',1,2,3,...], [...] ]
import { createSlice } from "@reduxjs/toolkit";

const SaveReserve = createSlice({
  name : 'savereserve',
  initialState : [
    []
  ],
  reducers : {
    setSaveReserve(state, action){
      if (action.payload !== Number){ 
        const setplace = [[...state],[action.payload]];
        return setplace.filter(function(item, idx){
          return setplace.indexOf(item) === idx;
        })
      } else if(action.payload === Number){
        const setarrage = [[...state,action.payload]];
        return setarrage.filter(function(item, idx){
          return setarrage.indexOf(item) === idx;
        })
      }
    }
  }
});

export const { setSaveReserve } = SaveReserve.actions;

export default SaveReserve;