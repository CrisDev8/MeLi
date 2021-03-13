import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import productsApi from './api/productsApi';
import ProductList from './components/productList';
import SearchBox from './components/searchBar';


function App() {

  const [state, setState] = useState({
    result: []
  });

  const onSearch = async (text) => {
    const results = await productsApi.get("/", {
      params: {
        item: text
      }
    });
    console.log("Resultados", results);
    setState(results.data);
  }

  return (
    <div>
      <SearchBox onSearch={onSearch} />
      <ProductList results={state} />
    </div>

  );
}

export default App;
