import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <h1>Routing in React with react-router-dom!</h1>
      <h2>Don't forget to npm install react-router-dom to get started</h2>
      <BrowserRouter>
        {/* link === anchor tag */}
        {/* <a href=""></a> */}
        {/* don't use a-tag because it will refresh the browser; state will be deleted */}
        <Link to={'/home'}>Home</Link><br></br>
        <Link to={'/about'}>About</Link>
        <Routes>
            {/* path='/' root route local host 3000 */}
            {/* render Home component */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
