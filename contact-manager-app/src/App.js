import { useState } from "react";
import { AddContact, EditContact, ViewContact, Contacts, Navbar} from "./components";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContact] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
};

export default App;
