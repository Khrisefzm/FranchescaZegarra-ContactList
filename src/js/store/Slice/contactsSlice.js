import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        seeContact: (state, action) => {
            state.value.push(...action.payload);
        },

        addContact: (state, action) => {
            const {name, adress, phone, email} = action.payload;
        }
    }
})

export const {seeContact, addContact} = contactsSlice.actions;