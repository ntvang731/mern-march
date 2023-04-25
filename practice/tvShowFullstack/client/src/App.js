import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Display from './components/Display';
import CreateShow from './components/CreateShow';
import OneShow from './components/OneShow';
import EditShow from './components/EditShow';

function App() {
  // establishing state for our list of tv show
  const [tvShowList, setTvShowList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      {/* content inside BrowserRouter but outside Routes will be
      displayed globally */}
      <h1>Welcome to our TV Show app</h1>
      {/* link that will take us to the url for creating a show */}
      {/* link to and route path must always match */}
      {/* despite how each is written, they yield the same url */}
      {/* e.g. Link to={`/viewShow/${show._id}`}>View</Link and
      Route path='/viewShow/:id' */}
      <Link to={'/createShow/form'}>Add your favorite show</Link>
      <br/>
      <Link to={'/'}>Home</Link>
        <Routes>
          {/* route that will render element Display component */}
          <Route path='/' element={<Display tvShowList={tvShowList} setTvShowList={setTvShowList}/>}/>
          {/* route that will render element CreateShow component */}
          <Route path='/createShow/form' element={<CreateShow/>}/>
          {/* route that will render element OneShow component */}
          <Route path='/viewShow/:id' element={<OneShow/>}/>
          {/* route that will render element EditShow component */}
          <Route path='/editShow/:id' element={<EditShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;