import React, { useState } from 'react';

// again, onFormSubmit is a prop but we destructured so no props.onFormSubmit
const SearchBar = ({ onFormSubmit }) => { 
  const [searchTerm, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // make sure we call callback from parent component
    onFormSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={onInputChange}  
          />
        </div>
      </form>
    </div>
  )
};

export default SearchBar;