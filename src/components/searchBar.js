import React, { useState } from 'react'


export default function SearchBox(props) {
    const { onSearch } = props;

    // Setear valores del buscador
    const [searchText, setSearch] = useState('');
    const handleInput = (e) => {
        const text = e.target.value;
        setSearch(text);
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }
    return (
        <>
            <input type="search" placeholder="Selecciona" onChange={handleInput} onKeyPress={handleEnterKeyPressed} value={searchText}></input>
        </>
    )
}