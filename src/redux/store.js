// store.js
import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './slice/reservationSlice';  

const store = configureStore({
  reducer: {
    reservation: reservationReducer,  
  },
});

export default store;
