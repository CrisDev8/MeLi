import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react'
import Logo from '../styles/img/Logo_ML.png';


export default function SearchBox(props) {
    const { onSearch } = props;

    // Setear valores del buscador
    const [searchText, setSearch] = useState('');
    const handleInput = (e) => {
        const text = e;
        setSearch(text);
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }
    return (
        <>
            {/* Container search Bar  */}
            <div className="searchBar__container">
                {/* Logo  */}
                <div className="searchBar__row">
                    <div className="searchBar__img">
                        <img src={Logo} alt="logo" />
                    </div>
                    {/* Input SearchBar  */}
                    <SearchBar className="searchBar__search" placeholder="Nunca dejes de buscar" onChange={handleInput} onKeyPress={handleEnterKeyPressed} value={searchText} />
                </div>
            </div>

        </>
    )
}