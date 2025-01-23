import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {}, 
    setContacts: () => {},
    contacts: [],
    setFilteredContacts: () => {},
    filteredContacts: [],
    groups: [],
    onContactChange: () => {},
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
    errors: []
})