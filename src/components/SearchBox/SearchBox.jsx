import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div>
      <form>
        <label className={s.label}>
          <span>Find contacts by name</span>
          <input className={s.input} />
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
