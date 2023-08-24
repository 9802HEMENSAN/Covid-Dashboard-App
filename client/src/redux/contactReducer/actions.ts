import * as types from "./actionType"
import { Dispatch } from "redux";

interface Contact {
    firstName: string;
    lastName: string;
    active: boolean;
  }
  

export const ADD_CONTACT= (payload : Contact )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.ADD_CONTACT, payload: payload})
}

export const DELETE_CONTACT= (payload : Contact )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.DELETE_CONTACT, payload: payload})
}

export const UPDATE_CONTACT= (payload : Contact )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.UPDATE_CONTACT, payload: payload})
}