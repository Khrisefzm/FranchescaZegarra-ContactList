import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        value: [{
            name: 'name1',
            adress: 'adress1',
            celphone: 9991235482,
            email: 'email@gmail.com'
        }]
    },
    reducers:{
        addContact: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addContact} = contactsSlice.actions;