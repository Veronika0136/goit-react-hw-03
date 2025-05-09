import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import s from '../components/App.module.css';

const App = () => {
  const initalContactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts] = useState(initalContactList);
  const [values, setValues] = useState('');

  const handleChangeInput = e => {
    setValues(e.target.value);
  };

  console.log(values);

  const handeleFilterContacts = (contacts, values) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(values.toLowerCase()));
  };

  const filterContacts = handeleFilterContacts(contacts, values);

  console.log(filterContacts);

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox values={values} handleChangeInput={handleChangeInput} />
      <ContactList contacts={filterContacts} />
    </div>
  );
};

export default App;
