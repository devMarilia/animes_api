import React, { useState } from 'react';
import '../../styles/styled.css'
import useDebounce from '../../hooks/useDebounce';

function  SearchInput({value, onChange}) {
    const [displayValue,setDisplayValue] = useState(value)

    const debouncedChenge = useDebounce(onChange, 500)

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChenge(event.target.value)
    }
    return (
       <input className="input-search" type="search" value={displayValue} onChange={handleChange}/>
    )
}

export default SearchInput;
