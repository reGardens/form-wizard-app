import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProvinsi = createAsyncThunk(
  "provinsi/getDataProvinsi",
  async (object, { getState, rejectWithValue }) => {
    // console.log(getState());
    try {
      const { data } = await axios.get(
        `https://ibnux.github.io/data-indonesia/provinsi.json`
      );
      const res = data;
      //   console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const dataProvinsi = createSlice({
  name: "provinsi",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDataProvinsi.pending]: (state, action) => {
      state.loading = true;
    },
    [getDataProvinsi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDataProvinsi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default dataProvinsi;
