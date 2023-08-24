import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "../components/ContactList";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import MapChart from "../components/MapChart";

const AllRoutes = () => {
  return (
      <main>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add-contact" element={<ContactForm />} />
          <Route path="/mapchart" element={<MapChart />} />
        </Routes>
      </main>
  );
};

export default AllRoutes;
