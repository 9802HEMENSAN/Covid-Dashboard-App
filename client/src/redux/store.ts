

import{ legacy_createStore ,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
 

export const rootReducer= combineReducers({
 
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))