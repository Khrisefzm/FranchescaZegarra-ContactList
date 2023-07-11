import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice} from './Slice/contactsSlice.js'

export default configureStore({
  reducer: {
    contact: contactsSlice.reducer
  }
})