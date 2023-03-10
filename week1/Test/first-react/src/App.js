//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Shows from './components/Shows';

//function App()
const App = () => {
  return (
    <div className="App">
      <Nav name={'Nujtxeng'}/>
      <Shows title={'Breaking Bad'} releaseYear={'2008'}/>
      <Shows title={'Attack On Titan'} releaseYear={'2013'}/>
      <Shows title={'The Office'} releaseYear={'2005'}/>
      <Shows title={'Inyuahsha'} releaseYear={'1996'}/>
    </div>
  );
}

export default App;
