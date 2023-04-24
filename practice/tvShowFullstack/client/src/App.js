import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  // establishing useState for our list of tv show
  const [tvShowList, setTvShowList] = useState([])

  useEffect(() => {
    // our Mongo Database is being run on localhost 8000
    // so we need to establish the connection as such
    axios.get('http://localhost:8000/api/allShows')
      .then((res) => {
        // if we successfully retrieve data from our database, then
        // console log the data via res
        console.log(res);
        // get to the array of objects
        setTvShowList(res.data.shows)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Welcome to our TV Show app</h1>
    </div>
  );
}

export default App;