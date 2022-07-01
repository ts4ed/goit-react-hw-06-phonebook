import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    word: '',
    number: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setWords(state, action) {
      state.word = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getName = state => state.contacts.word;
export const getNumber = state => state.contacts.number;
export const { setFilter, addContacts, deleteContacts, setWords, setNumber } =
  contactsSlice.actions;
