import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataKecamatan = createAsyncThunk(
  "kecamatan/getDataKecamatan",
  async (id, { getState, rejectWithValue }) => {
    // console.log(id);
    try {
      const { data } = await axios.get(
        `https://ibnux.github.io/data-indonesia/kecamatan/${id}.json`
      );
      const res = data;
      // console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const dataKecamatan = createSlice({
  name: "kecamatan",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDataKecamatan.pending]: (state, action) => {
      state.loading = true;
    },
    [getDataKecamatan.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDataKecamatan.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default dataKecamatan;
