import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import {
  AddContact,
  EditContact,
  ViewContact,
  Contacts,
  Navbar
} from "./components";
import { getAllContacts, getAllGroups } from "./services/contactService";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContact] = useState([]);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactData } = await getAllContacts()
        const { data: groupsData } = await getAllGroups()
        setContact(contactData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts loading={loading} contacts={getContacts} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;
