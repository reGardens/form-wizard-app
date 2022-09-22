import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataKota = createAsyncThunk(
  "kota/getDataKota",
  async (id, { getState, rejectWithValue }) => {
    // console.log(id);
    try {
      const { data } = await axios.get(
        `https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`
      );
      const res = data;
      // console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const dataKota = createSlice({
  name: "kota",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDataKota.pending]: (state, action) => {
      state.loading = true;
    },
    [getDataKota.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDataKota.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default dataKota;
