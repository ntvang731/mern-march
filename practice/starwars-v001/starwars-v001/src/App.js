import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// useEffect Hook allows you to perform side effects in your components
// examples: fetching data from an API, directly updating the DOM, and timers
// useEffect accepts two arguments; the second is optional

function App() {
  // useEffect(() => {}, []) structure for useEffect block
  useEffect(() => {
    // axios is now used in place of fetch
    axios.get('https://swapi.dev/api/people/') // api address location
      // if data is successfully retrieved, the .then will run
      // if data is unsuccesfully retrieved, the .catch will run
      .then((res) => { // call back function with rest (i.e. response)
        console.log('Response:')
        console.log(res)
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

    </div>
  );
}

export default App;
