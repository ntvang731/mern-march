import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Word from './components/Word'
import Form from './components/Form'

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
            {/* takes us to Form.js where user input navigates us to a certain route */}
            <Route path='/' element={<Form/>}/>
            {/* render Home component */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/* useWord after : is key pair to {useWord} in Word.js */}
            <Route path='/word/:useWord' element={<Word/>}/>
            {/* color after : is key pair to {color} in Word.js */}
            <Route path='/word/:color' element={<Word/>}/>
            {/* passing color scheme and an id as path variables*/}
            <Route path='/word/:color/:id' element={<Word/>}/>
            {/* <Route path='/word/:color/:useWord' element={<Word/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
