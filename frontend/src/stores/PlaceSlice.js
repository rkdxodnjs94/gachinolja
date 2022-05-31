// 가게이름 데이터를 저장하는 state입니다.
import { createSlice } from "@reduxjs/toolkit";

const PlaceSlice = createSlice({
  name : 'place',
  initialState : [],
  reducers : {
    setPlace(state, action){
      const setstate = [...state, action.payload];
      return setstate.filter(function(item, idx){
        return setstate.indexOf(item) === idx;
      });
    }
  }
});

export const { setPlace } = PlaceSlice.actions;

export default PlaceSlice;