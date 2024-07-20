import { createSlice } from '@reduxjs/toolkit';

import contactData from '../components/contactData.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactData },
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
