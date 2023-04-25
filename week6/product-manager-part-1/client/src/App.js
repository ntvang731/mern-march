import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';


function App() {
  // establishing state for our list of products
  const [productList, setProductList] = useState([]);

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
      {/* content inside BrowserRouter but outside Routes will be
      displayed globally */}
        <Routes>
          {/* route that will render element Display component */}
          <Route path='/' element={<CreateProduct productList={productList}
            setProductList={setProductList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;