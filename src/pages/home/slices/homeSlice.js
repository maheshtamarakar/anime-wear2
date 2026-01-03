import { createSlice } from "@reduxjs/toolkit";
const initialData = {
  id: 1,
  count: 0,
};

const homeSlice = createSlice({
  name: "home",
   initialState: initialData, // ✅ correct,
  reducers: {
    increment: function (state, action) {
      state.count = state.count + 1;
    },
    decrement: function (state, action) {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
