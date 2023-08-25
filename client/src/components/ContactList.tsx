import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Dispatch } from "redux";
import { Contact, DeleteContact, UpdateContact } from "../redux/contactReducer/actions";
const ContactList: React.FC = () => {
  const contacts = useSelector((store: RootState) => store.contacts.contacts);
  const dispatch: Dispatch<any> = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 
 const [EditDetails , setEditDetails ] = useState({
    id : Date.now(),
    firstName : "",
    lastName : "",
    active: true ,
 })

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleEditFill=(contact : any)=>{
    setEditDetails(contact)
    openPopup()
  }

  const handleEdit = () => {
    dispatch(UpdateContact(EditDetails))
    closePopup()
  };

  const handleChange=(e : any )=>{
    
     const {name,value}=e.target;

     setEditDetails({
        ...EditDetails,
        [name] : value
     })
  }

  const handleDelete = (id: number) => {
      dispatch(DeleteContact(id));
      alert("Delete Contact");
  };

  return (
    <div>
      <h1>ContactList</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={Date.now() + Math.random()}>
            {index + 1} {contact.firstName} {contact.lastName}
            <button
              className="ml-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
              onClick={()=> handleEditFill(contact)}
            >
              Edit
            </button>
            <button
              className="ml-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>
      {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg">
                  <h2 className="text-lg font-semibold mb-4">Popup Content</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="mt-1 block w-full rounded border-gray-300"
                      value={EditDetails.firstName}
                      placeholder="Enter Your First Name"
                      onChange={(e)=> handleChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="mt-1 block w-full rounded border-gray-300"
                      placeholder="Enter Your Last Name"
                      value={ EditDetails.lastName}
                      onChange={(e)=> handleChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Active</label>
                    <input
                      type="radio"
                      className="mr-2"
                      name="isActive"
                      checked={true}
                       onChange={(e)=> handleChange(e)}
                    />
                    Yes
                    <input
                      type="radio"
                      className="ml-4 mr-2"
                      name="isActive"
                      checked={false}
                      onChange={(e)=> handleChange(e)}
                    />
                    No
                  </div>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={() => {
                      handleEdit();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
    </div>
  );
};

export default ContactList;
