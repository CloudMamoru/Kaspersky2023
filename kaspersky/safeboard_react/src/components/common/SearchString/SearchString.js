import React, { useState } from 'react';

// Поисковая строка
const SearchString = ({ onSearchSend }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='field has-addons'>
      <div className='control'>
        <input
          className='input is-small'
          type='text'
          placeholder='Find an employee'
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        ></input>
      </div>
      <div className='control'>
        <a className='button is-small' onClick={() => onSearchSend(searchValue)}>
          Search
        </a>
      </div>
    </div>
  );
};

export default SearchString;
