import React from 'react';
import s from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="./src/assets/icons.svg#icon-user"></use>
          </svg>
          <p>{name}</p>
        </div>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="./src/assets/icons.svg#icon-phone"></use>
          </svg>
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn}>Delete</button>
    </div>
  );
};

export default Contact;
