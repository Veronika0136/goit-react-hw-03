import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.flex}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} handleDeleteContact={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
