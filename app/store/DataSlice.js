import { createSlice } from "@reduxjs/toolkit";
import ProfileData from "./Data.js";

const dataSlice = createSlice({
  name: "data",
  initialState: ProfileData,
});

export default dataSlice;
