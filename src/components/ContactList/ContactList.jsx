import React from 'react';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
