import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// useEffect Hook allows you to perform side effects in your components
// examples: fetching data from an API, directly updating the DOM, and timers
// useEffect accepts two arguments; the second is optional

// example of promise (takeOutTheTrash is the promise)
// **********
// let trashGoTakenOut = false

// const takeOutTheTrash = new Promise((resolve, reject) => {
//   if(trashGoTakenOut){
//     resolve('Thanks for taking out the trash')
//   } else {
//     reject('You did not take out the trash')
//   }
// })

// trashGoTakenOut
//   .then(message => console.log(message))
//   .catch(err => console.log(err))
// **********

function App() {
  // setting up useState to capture first ten characters of API data retrieval
  const [starWarsCharacters, setStarWarsCharacters] = useState([])
  // useEffect(() => {}, []) structure for useEffect block
  useEffect(() => {
    // axios is now used in place of fetch
    axios.get('https://swapi.dev/api/people/') // api address location
      // if data is successfully retrieved, the .then will run
      // if data is unsuccesfully retrieved, the .catch will run
      .then((res) => { // call back function with res (i.e. response)
        console.log('RESPONSE:')
        // will console log the entire API data retrieval per axios.get link
        // console.log(res)
        // will console log specifically what is under hierarchy res.data.results(i.e. array of first 10 characters)
        console.log(res.data.results)
        // will set useState to an array of first 10 characters
        setStarWarsCharacters(res.data.results)
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
      <h1>Using the Star Wars API</h1>
      <a href='https://swapi.dev/' target='_blank'>Click here to view the <b>swapi</b> documentation</a>
      {
        // map through the starWarsCharacters array and show each character's name in browser
        starWarsCharacters.map((character, index) => (
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
