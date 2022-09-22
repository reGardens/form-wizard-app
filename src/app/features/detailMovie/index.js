// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getDetailMovies = createAsyncThunk(
//     "movie",
//     async (id, { rejectWithValue }) => {
//     //   console.log('hasil id', id);
//       try {
//         const { data } = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055&language=en-US&page=1`
//         );
//         const res = data;
//         console.log(res);
//         return res;
//       } catch (error) {
//         rejectWithValue(error.response);
//       }
//     }
//   );
  
// const detailMovie = createSlice({
//   name: "movie",
//   initialState: {
//     data: [],
//     isLoading: false,
//     err: false,
//     // message: "",
//   },
//   extraReducers: {
//     [getDetailMovies.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getDetailMovies.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.data = payload;
//       state.err = false;
//     },
//     [getDetailMovies.rejected]: (state) => {
//       state.isLoading = false;
//       state.err = true;
//     //   state.message = "failed";
//     },
//   },
// });

// export default detailMovie;
