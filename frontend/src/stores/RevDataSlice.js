import { createSlice } from "@reduxjs/toolkit";
import Data from '../data/marketdata.json';

const RevData = createSlice({
  name : 'RevData',
  initialState : Data
  }
)

export default RevData;