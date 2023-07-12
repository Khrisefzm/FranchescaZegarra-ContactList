import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice} from './Slice/contactsSlice.js'

export const store = configureStore({
  reducer: {
    contact: contactsSlice.reducer
  }
});