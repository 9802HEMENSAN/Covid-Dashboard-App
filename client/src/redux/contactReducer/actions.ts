import * as types from "./actionType"
import { Dispatch } from "redux";

export interface Contact {
    id :Number;
    firstName: string;
    lastName: string;
    active: boolean;
  }
  

export const AddContact = (payload : Contact )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.ADD_CONTACT, payload: payload})
    console.log(payload)
}

export const  DeleteContact = (payload : number )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.DELETE_CONTACT, payload: payload})
    console.log(payload)
}

export const  UpdateContact = (payload : Contact )=> (dispatch : Dispatch)=>{
    dispatch({ type : types.UPDATE_CONTACT, payload: payload})
    console.log("Edit", payload)
}