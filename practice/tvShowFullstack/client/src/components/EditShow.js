import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditShow = (props) => {

    const navigate = useNavigate();

    // grabs the id from the url
    const {id} = useParams()

    // establishing state for show as an object
    // object should contain keys that match our tvshow model/MongDB fields
    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        network:'',
        creator:'',
        genre:''
    })

    // establishing state for errors as an empty array
    const [errors, setErrors] = useState({})

    // spread everything in the show object
    // and find the keyword based on the user input [e.target.name]
    // then assign the value from the input field e.target.value
    const changeHandler = (e) => {
        setShow({...show, [e.target.name]:e.target.value})
    }

    // find the show to update
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


    // a lot of the content for editing a show will be similar to creating a show
    // however, the submitHandler will need to be updated in handling an edit
    // (e.g. axios.put and the route)
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateShow/${id}`, show)
            .then((res) => {
                console.log(res);
                // navigate('/')
            })
            .catch((err) => {
                // response.data.errors is keyword hierarchy shown in Console
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    {/* name must match key in our object (i.e. title)*/}
                    <input type="text" name="title" onChange={changeHandler} value={show.title}/>
                    {
                        // ternary operator for displaying error message if it exists
                        // errors.title.message --> errors is getter from state
                        // errors.title.message --> title.message is keyname hierarchy from state (Components)
                        errors.title?
                        <p className='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    {/* name must match key in our object (i.e. releaseYear)*/}
                    <input type="number" name="releaseYear" onChange={changeHandler} value={show.releaseYear}/>
                    {
                        errors.releaseYear?
                        <p className='text-danger'>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>network:</label>
                    {/* name must match key in our object (i.e. network)*/}
                    <input type="text" name="network" onChange={changeHandler} value={show.network}/>
                    {
                        errors.network?
                        <p className='text-dangere'>{errors.network.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    {/* name must match key in our object (i.e. creator)*/}
                    <input type="text" name="creator" onChange={changeHandler} value={show.creator}/>
                    {
                        errors.creator?
                        <p className='text-danger'>{errors.creator.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    {/* name must match key in our object (i.e. genre)*/}
                    <input type="text" name="genre" onChange={changeHandler} value={show.genre}/>
                    {
                        errors.genre?
                        <p className='text-danger'>{errors.genre.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditShow;