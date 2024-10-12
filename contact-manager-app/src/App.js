import { useState } from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import { AddContact, EditContact, ViewContact, Contacts, Navbar} from "./components";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContact] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts"/>}/>
        <Route path='/contacts' element={<Contacts loading={loading} contacts={getContacts}/>}/>
        <Route path="/contacts/add" element={<AddContact/>}/>
        <Route path="/contacts/:contactId" element={<ViewContact/>}/>
        <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
      </Routes>
    </div>
  );
};

export default App;
