import React, { useState, useEffect } from 'react';
import initialContactList from '../assets/initialContactList.json';
import { nanoid } from 'nanoid';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import s from '../components/App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('dataContacts')) || initialContactList
  );
  const [values, setValues] = useState('');

  useEffect(() => {
    localStorage.setItem('dataContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInput = e => {
    setValues(e.target.value);
  };

  const handeleFilterContacts = (contacts, values) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(values.toLowerCase()));
  };

  const filterContacts = handeleFilterContacts(contacts, values);

  const handleSubmit = (values, options) => {
    const newValues = { ...values, id: nanoid() };
    setContacts(contacts => [...contacts, newValues]);

    options.resetForm();
  };

  const handleDeleteContact = id => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox values={values} handleChangeInput={handleChangeInput} />
      <ContactList contacts={filterContacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
