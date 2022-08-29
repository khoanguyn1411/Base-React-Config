import { createSlice } from "@reduxjs/toolkit";
import { getFunction } from "./dispatcher";
import { initialState } from "./state";

export const demoSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFunction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFunction.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getFunction.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
        state.isLoading = false;
      }),
});
