// useEffect is used for making an API call
import React, {useState, useEffect} from 'react';
// useParams is used for grabbing something from the url
import {useParams} from 'react-router-dom';
// import axios to make an axios call
import axios from 'axios';

const OneProduct = (props) => {

    // state will allow us to get and set product object
    // the getter will grab the object data for displaying
    const [product, setProduct] = useState({})

    // grabs the id from the url
    const {id} = useParams()
    console.log(id);

    // general setup for useEffect
    // useEffect(() => {},[])
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

    return (
        <div>
            {/* product.title --> product is the getter from useState */}
            {/* product.title --> title is the keyname */}
            <h2>Title: {product.title}</h2>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
        </div>
    )
}

export default OneProduct;