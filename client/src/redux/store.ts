

import{ legacy_createStore ,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contactsReducer from "./contactReducer/contactReducer";
 

// Defined the root reducer by combining all reducers
export const rootReducer= combineReducers({
    contacts:  contactsReducer
})

// Created the store with rootReducer and applyMiddleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// Defined RootState type
export type RootState = ReturnType<typeof rootReducer>;