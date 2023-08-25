import * as types from "./actionType";

// Defined the shape of a contact
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
}

// Defined the action for adding a contact
interface AddContactAction {
  type: typeof types.ADD_CONTACT;
  payload: Contact;
}

// Defined the action for deleting a contact
interface DeleteContactAction {
  type: typeof types.DELETE_CONTACT;
  payload: number
}

// Defined the action for updating a contact
interface UpdateContactAction {
  type: typeof types.UPDATE_CONTACT;
  payload: Contact;
}

type ContactActionTypes =
  | AddContactAction
  | DeleteContactAction
  | UpdateContactAction;

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

// Created the reducer function
const contactsReducer = (
  state = initialState,
  action: ContactActionTypes
): ContactsState => {
  switch (action.type) {
    case types.ADD_CONTACT:
        
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload 
        ),
      };

    case types.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    default:
      return state;
  }
};

export default contactsReducer;
