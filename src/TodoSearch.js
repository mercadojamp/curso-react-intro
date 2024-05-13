import './TodoSearch.css'
import React, { useState } from 'react';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState();
    useState('');

    console.log('Los usuarios buscan: '+searchValue)

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