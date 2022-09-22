import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataKecamatan from './features/dataKecamatan';
import dataKelurahan from './features/dataKelurahan';
import dataKota from './features/dataKota';
import dataProvinsi from './features/dataProvinsi';

export const store = configureStore({
  reducer: {
    provinsi: dataProvinsi.reducer,
    kota: dataKota.reducer,
    kecamatan: dataKecamatan.reducer,
    kelurahan: dataKelurahan.reducer,
  },
});
