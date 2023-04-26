import React, {useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {

    // establishing state for product as an object
    // object should contain keys that match our product model/MongDB fields
    const [product, setProduct] = useState({
        title:'',
        price:0.01,
        description:''
    })

    // spread everything in the product object
    // target the keyword based on the user input [e.target.name]
    // then assign the value from the input field e.target.value to target name
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // send post data in react to backend by providing product object
        // routing to backend via axios (i.e. http://localhost:8000/...)
        axios.post('http://localhost:8000/api/newProduct', product)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                // upon successful post when submitting, navigate user to display page
                // routing to frontend via react-router-dom (e.g. '/createProduct/form')
                // navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    {/* name must match key in our object (i.e. title)*/}
                    <input type="text" name="title" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Price:</label>
                    {/* name must match key in our object (i.e. price)*/}
                    <input type="number" name="price" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Description:</label>
                    {/* name must match key in our object (i.e. description)*/}
                    <input type="text" name="description" onChange={changeHandler}/>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct;