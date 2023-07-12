import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [{
        name: 'name1',
        adress: 'adress1',
        phone: 9991235482,
        email: 'email@gmail.com'
    }],
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        addContact: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addContact} = contactsSlice.actions;