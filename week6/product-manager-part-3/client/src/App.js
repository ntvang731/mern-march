import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './views/main';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';


function App() {
  // establishing state for our list of products
  // const [productList, setProductList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      {/* content inside BrowserRouter but outside Routes will be
      displayed globally */}
        <Routes>
          {/* route that will render element Display component */}
          {/* cannot have multiple Route with the same path; therefore,
          place CreateProduct and Display elements into a main component;
          then Route to main component to render CreateProduct and Display
          on the same page */}
          {/* <Route path='/' element={<CreateProduct/>}/>
          <Route path='/' element={<Display productList={productList} setProductList={setProductList}/>}/> */}
          <Route path='/' element={<Main/>}/>
          <Route path='viewProduct/:id' element={<OneProduct/>}/>
          <Route path='/editProduct/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;