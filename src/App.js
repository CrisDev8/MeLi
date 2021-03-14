import React, { useState } from 'react';


// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

// Referencia al api
import productsApi from './api/productsApi';

// Componentes
import ProductList from './components/productList';
import SearchBox from './components/searchBar';
import Breadcrumb from './components/breadcrumb';
import Detail from './components/detail';


// Estilos 
import './styles/generic.scss';
import './styles/searchBar.scss';
import './styles/products.scss';
import './styles/breadCrumbs.scss';
import './styles/detail.scss';

function App() {

  const [resultsState, setResultState] = useState({
    result: []
  });

  const [categoriesState, setCategoriesState] = useState({
    categories: []
  })


  const onSearch = async (text) => {
    const results = await productsApi.get("/", {
      params: {
        item: text
      }
    });
    setResultState(results.data);
    setCategoriesState(results.data.categorias);
  }


  return (
    <Router>
      <div className="generic__container">
        <Link to="/items">
          <SearchBox onSearch={onSearch} />
        </Link>
        {/* {redirectState ? <Redirect to={{ pathname: "/items" }} /> : null} */}
        <Breadcrumb categories={categoriesState} />
        <Switch>
          <Route path="/items/:id">
            <Detail></Detail>
          </Route>
          <Route path="/items">
            <ProductList results={resultsState} />
          </Route>
          <Route path="/" exact>
            <div className="generic__author">
              Cristian Silva - Test Front End Mercado Libre
            </div>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
