import React, { useState } from 'react';
import './SearchInputElement.css'
import useDebounce from '../../hooks/useDebounce';
import {FaSearch} from 'react-icons/fa'


function  SearchInput({value, onChange}) {
    const [displayValue,setDisplayValue] = useState(value)

    const debouncedChenge = useDebounce(onChange, 500)

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChenge(event.target.value)
    }
    return (
        <div className='search-container'>
        <div className='search-content'>
          <input 
          className='input-search' 
          type='search' 
          value={displayValue} 
          onChange={handleChange} 
          placeholder="Busque por um produto"
          />
          <FaSearch />
        </div>
      </div>
    )
}

export default SearchInput;
