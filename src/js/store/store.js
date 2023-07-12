import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice} from './Slice/contactsSlice.js'
import { saveIdSlice } from './Slice/saveIdSlice.js';

export const store = configureStore({
  reducer: {
    contact: contactsSlice.reducer,
    saveId: saveIdSlice.reducer
  }
});