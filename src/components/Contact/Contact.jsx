import React from 'react';

const Contact = ({ name, number }) => {
  return (
    <div>
      <svg width={20} height={20}>
        <use href="src/assets/icons.svg#icon-user"></use>
      </svg>
      <h3>{name}</h3>
      <svg width={20} height={20}>
        <use href="src/assets/icons.svg#icon-phone"></use>
      </svg>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
