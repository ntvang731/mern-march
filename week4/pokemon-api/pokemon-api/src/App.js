import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// useEffect Hook allows you to perform side effects in your components
// examples: fetching data from an API, directly updating the DOM, and timers
// useEffect accepts two arguments; the second is optional

function App() {
  // setting up useState to capture first ten characters of API data retrieval
  const [pokemonCharacters, setPokemonCharacters] = useState([])
  // useEffect(() => {}, []) structure for useEffect block
  useEffect(() => {
    // axios is now used in place of fetch
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807') // api address location
      // if data is successfully retrieved, the .then will run
      // if data is unsuccesfully retrieved, the .catch will run
      .then((res) => { // call back function with res (i.e. response)
        console.log('RESPONSE:')
        // will console log the entire API data retrieval per axios.get link
        // console.log(res)
        // will console log specifically what is under hierarchy res.data.results
        console.log(res.data.results)
        // will set useState to an array of characters
        setPokemonCharacters(res.data.results)
      })
      .catch((err) => { // call back function with err (i.e. error)
        console.log(err);
      })
  }, [])
  // useEffect will run after a component is rendered or updated;
  // the [] (i.e. array) helps identify when the component has been rendered or updated
  // to see successful data retrieval from API, go to browser component: Object --> data --> results
  return (
    <div className="App">
      <h1>Using the Pokemon API</h1>
      <a href='https://pokeapi.co/' target='_blank'>Click here to view the <b>PokeApi</b> documentation</a>
      {
        // map through the starWarsCharacters array and show each character's name in browser
        pokemonCharacters.map((character, index) => (
          <div key={index}>
            {/* 'name' from character.name is a key from the object */}
            {/* refert to State in browser Components tab to see key value pair */}
            <h3>Name: {character.name}</h3>
            <p>---------------</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
