import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Display = (props) => {

    const {tvShowList, setTvShowList} = props;

    useEffect(() => {
        // our Mongo Database is being run on localhost 8000
        // so we need to establish the connection as such
        axios.get('http://localhost:8000/api/allShows')
            .then((res) => {
            // if we successfully retrieve data from our database, then
            // console log the data via res
            console.log(res);
            // get to the array of objects via key 'shows' under
            // inspect tool --> Console in React app
            setTvShowList(res.data.shows)
            })
            .catch((err) => {
            console.log(err);
            })
    },[])

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)
            .then((res) => {
                console.log(res);
                // this will instantly display shows that were not deleted after
                // a show was deleted; otherwise, user will have to refresh page to
                // see the remaining shows
                // filter through shows that do not have a matching id to the show
                // that got deleted
                const updatedShowList = tvShowList.filter((show) => show._id !== id)
                setTvShowList(updatedShowList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>All of our shows</h2>
            {
                tvShowList.map((show) => (
                    // each prop child should have its own key
                    // use each object's unique id from MongoDB
                    <div key={show._id}>
                        <h2>Title: {show.title}</h2>
                        <h2>Network: {show.network}</h2>
                        <h2>Genre: {show.genre}</h2>
                        <h2>Creator: {show.creator}</h2>
                        <h2>Release Year: {show.releaseYear}</h2>
                        {/* use back-tick (i.e. `) to inject a variable*/}
                        {/* show._id --> show is the variable we designated for map */}
                        {/* map allows us to iterate through each show and do something with the info */}
                        <Link to={`/viewShow/${show._id}`}>View</Link>
                        <br/>
                        <Link to={`/editShow/${show._id}`}>Edit</Link>
                        <button onClick={() => deleteHandler(show._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;