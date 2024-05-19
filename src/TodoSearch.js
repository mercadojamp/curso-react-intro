import './TodoSearch.css'
import React, { useState } from 'react';

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return (
        <input 
            placeholder="Ayuda..."
            className='TodoSearch' 
            value={searchValue}
            onChange={
                (event)=> {
                    setSearchValue(event.target.value);
                }
            }
        />
    );
  }

export {TodoSearch};  