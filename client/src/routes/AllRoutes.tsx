import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "../components/ContactList";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import { useLoadScript } from "@react-google-maps/api";
import ChartComponent from "../components/MainChart";
import OpenLayersMap from "../components/MapChart";
 

const AllRoutes = () => {
 

  return (
      <main>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add-contact" element={<ContactForm />} />
          <Route path="/chart" element={<ChartComponent/>} />
          <Route path="/mapchart" element={ < OpenLayersMap />} />
        </Routes>
      </main>
  );
};

export default AllRoutes;
