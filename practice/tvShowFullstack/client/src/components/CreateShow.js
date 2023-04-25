import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateShow = (props) => {

    const navigate = useNavigate();

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

    const submitHandler = (e) => {
        e.preventDefault();
        // send post data in react to backend by providing show object
        // i.e. get sent to req.body
        // routing to backend via axios (i.e. http://localhost:8000/...)
        axios.post('http://localhost:8000/api/newShow', show)
            .then((res) => {
                console.log(res);
                // upon successful post when submitting, navigate user to display page
                // routing to frontend via react-router-dom (e.g. '/createShow/form')
                navigate('/')
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
                    <input type="text" name="title" onChange={changeHandler}/>
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
                    <input type="number" name="releaseYear" onChange={changeHandler}/>
                    {
                        errors.releaseYear?
                        <p className='text-danger'>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>network:</label>
                    {/* name must match key in our object (i.e. network)*/}
                    <input type="text" name="network" onChange={changeHandler}/>
                    {
                        errors.network?
                        <p className='text-dangere'>{errors.network.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    {/* name must match key in our object (i.e. creator)*/}
                    <input type="text" name="creator" onChange={changeHandler}/>
                    {
                        errors.creator?
                        <p className='text-danger'>{errors.creator.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    {/* name must match key in our object (i.e. genre)*/}
                    <input type="text" name="genre" onChange={changeHandler}/>
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

export default CreateShow;