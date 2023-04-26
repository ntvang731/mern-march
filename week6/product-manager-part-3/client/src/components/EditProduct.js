import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditProduct = (props) => {

    const navigate = useNavigate();

    // grabs the id from the url
    const {id} = useParams()

    // establishing state for product as an object
    // object should contain keys that match our product model/MongDB fields
    const [product, setProduct] = useState({
        title:'',
        price:0.01,
        description:''
    })

    // establishing state for errors as an empty array
    const [errors, setErrors] = useState({})

    // spread everything in the product object
    // and find the keyword based on the user input [e.target.name]
    // then assign the value from the input field e.target.value
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    // find the product to update
    useEffect(() => {
        // use backticks to inject a variable
        // id is the data we grabbed via useParams() and stored as const {id}
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                // use console log to test whether the appropriate data is being retrieved
                // if successfully retrieved, then set the data (e.g. setProduct(res.data.product))
                // console.log(res);
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
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
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    {/* name must match key in our object (i.e. title)*/}
                    <input type="text" name="title" onChange={changeHandler} value={product.title}/>
                    {
                        // ternary operator for displaying error message if it exists
                        // errors.title.message --> errors is getter from state
                        // errors.title.message --> title.message is keyname hierarchy from state (Components)
                        errors.title?
                        <p>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Price:</label>
                    {/* name must match key in our object (i.e. price)*/}
                    <input type="number" name="price" onChange={changeHandler} value={product.price}/>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    {/* name must match key in our object (i.e. description)*/}
                    <input type="text" name="description" onChange={changeHandler} value={product.description}/>
                    {
                        errors.description?
                        <p>{errors.description.message}</p>:
                        null
                    }
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditProduct;