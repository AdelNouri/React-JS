import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    setContacts: () => {},
    contacts: [],
    setFilteredContacts: () => {},
    filteredContacts: [],
    groups: [],
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {}
})