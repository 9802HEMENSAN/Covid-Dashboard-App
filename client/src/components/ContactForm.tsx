import React , { useState } from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };

    const  handleSubmit=()=>{
       alert(`${firstName} ${ lastName}  ${isActive} done`);
    }

 
  return (
    <div>
      <h1>ContactForm</h1>
      <div className="p-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={openPopup}
        >
           Create New Contact
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Popup Content</h2>
              <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded border-gray-300"
                value={firstName}
                placeholder="Enter Your First Name"
                onChange={(e)=> setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded border-gray-300"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Active</label>
              <input
                type="radio"
                className="mr-2"
                checked={isActive}
                onChange={()=> setIsActive(true)}
              />
              Yes
              <input
                type="radio"
                className="ml-4 mr-2"
                checked={!isActive}
                onChange={()=> setIsActive(false)}
              />
              No
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={()=> {
                  closePopup()
                  handleSubmit()}
                }

            >
              Close
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
