import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Word from './components/Word'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/* path='/' root route local host 3000 */}
            {/* render Home component */}
            <Route path='/home' element={<Home/>}/>
            {/* useWord after : is key pair to {useWord} in Word.js */}
            <Route path='/:word' element={<Word/>}/>
            {/* passing number as path variable*/}
            <Route path='/:number' element={<Word/>}/>
            {/* passing word and two colors as path variables*/}
            <Route path='/:word/:color1/:color2' element={<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;