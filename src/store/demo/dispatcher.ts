import { createAsyncThunk } from "@reduxjs/toolkit";

const getFeatureFunction = () => {
  return [];
};

export const getFunction = createAsyncThunk("feature/get", () =>
  getFeatureFunction()
);
