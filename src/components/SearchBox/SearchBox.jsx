import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ values, handleChangeInput }) => {
  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input className={s.input} value={values} onChange={handleChangeInput} />
      </label>
    </div>
  );
};

export default SearchBox;
