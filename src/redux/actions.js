import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('items/addContact', (name, number) => ({
  payload: { id: nanoid(), name, number },
}));
const deleteContact = createAction('items/deleteContact');

const changeFilter = createAction('filter/changeFilter');

export { addContact, deleteContact, changeFilter };
