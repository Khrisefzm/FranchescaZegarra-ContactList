import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        seeContact: (state, action) => {
            state.value = action.payload;
        },
        addContact: (state, action) => {
            state.value.push(action.payload);
        }
    }

})

export const {seeContact, addContact} = contactsSlice.actions;