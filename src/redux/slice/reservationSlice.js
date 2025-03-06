// reservationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    date: '',
    time: '',
    guests: 1,
  },
  reducers: {
    reserveTable: (state, action) => {
      state.date = action.payload.date;
      state.time = action.payload.time;
      state.guests = action.payload.guests;
    },
  },
});

export const { reserveTable } = reservationSlice.actions;
export default reservationSlice.reducer;
