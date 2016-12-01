export const addContact = (newContact) => {
  return {
    type: 'ADD_CONTACT',
    payload: newContact
  };
};

const INITIAL_CONTACTS = [
  {
    id: 1,
    name: 'Mariau',
    children: 3
  },
  {
    id: 2,
    name: 'Julio',
    children: 0
  },
  {
    id: 3,
    name: 'Belen',
    children: 2
  },
];

export const loadContacts = () => {
  return {
    type: 'LOAD_CONTACTS',
    payload: INITIAL_CONTACTS
  };
};

export const removeContact = (contactToRemove) => {
  return {
    type: 'REMOVE_CONTACT',
    payload: contactToRemove
  };
};

export const editName = (oldName, newName) => {
  return {
    type: 'UPDATE_NAME',
    oldName: oldName,
    newName: newName
  };
};
