import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataKelurahan = createAsyncThunk(
  "kelurahan/getDataKelurahan",
  async (id, { getState, rejectWithValue }) => {
    // console.log(id);
    try {
      const { data } = await axios.get(
        `https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`
      );
      const res = data;
      // console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const dataKelurahan = createSlice({
  name: "kelurahan",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDataKelurahan.pending]: (state, action) => {
      state.loading = true;
    },
    [getDataKelurahan.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDataKelurahan.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default dataKelurahan;
