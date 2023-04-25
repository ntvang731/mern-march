// useEffect is used for making an API call
import React, {useState, useEffect} from 'react';
// useParams is used for grabbing something from the url
import {useParams} from 'react-router-dom';
// import axios to make an axios call
import axios from 'axios';

const OneShow = (props) => {

    // state will allow us to get and set the single show object
    // the getter will grab the object data for displaying
    const [show, setShow] = useState({})

    // grabs the id from the url
    const {id} = useParams()
    console.log(id);

    // general setup for useEffect
    // useEffect(() => {},[])
    useEffect(() => {
        // use backticks to inject a variable
        // id is the data we grabbed via useParams() and stored as const {id}
        axios.get(`http://localhost:8000/api/oneShow/${id}`)
            .then((res) => {
                // use console log to test whether the appropriate data is being retrieved
                // if successfully retrieved, then set the data (e.g. setShow(res.data.show))
                // console.log(res);
                console.log(res.data.show);
                setShow(res.data.show);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <div>
            {/* show.title --> show is the getter from useState */}
            {/* show.title --> title is the keyname */}
            <h1>Title: {show.title}</h1>
            <h2>Aired on: {show.network} in {show.releaseYear}</h2>
            <h2>Created by: {show.creator}</h2>
            <h2>Genre: {show.genre}</h2>
        </div>
    )
}

export default OneShow;