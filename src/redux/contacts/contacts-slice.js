import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsLoading: state => {
      state.isLoading = true;
    },
    fetchContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    addContactsLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    addContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
      // console.log('items= ', state.items);
    },
    addContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    deleteContactLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    // deleteContactSuccess: (state, { payload: id }) => {
    deleteContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      // state.items = state.items.filter(( contact ) => id !== contact.id);
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    deleteContactError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} = contactsSlice.actions;

export default contactsSlice.reducer;
