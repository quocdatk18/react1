
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';

import NotFound from './components/NotFound';
import { getProducts } from './services/api';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  const getProductsAll = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductsAll();
  }, [])

  const handleSearch = async (keyword) => {
    var response = await getProducts();
    var filterArr = response.data.filter(item => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setProducts(filterArr);
  }

  const handleAdd = async (product) => {
    var response = await getProducts();
    var newArr = response.data.push(product);
    setProducts(newArr);
  }

  return (
    <Router>
      <div className="App">
        <Header parentCallback={handleSearch} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product">
            <div className="container-fluid">
              <div className="row">
                <div className="col col-md-9">
                  <div className="row">
                    {products.map(product => {
                      return <Product item={product} key={product.id} />
                    })}
                  </div>
                </div>
                <div className="col col-md-3">
                  <Contact parentCallback={handleAdd} />
                </div>
              </div>
            </div>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
