import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Display = (props) => {

    const {productList, setProductList} = props;

    useEffect(() => {
        // our Mongo Database is being run on localhost 8000
        // so we need to establish the connection as such
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
            // if we successfully retrieve data from our database, then
            // console log the data via res
            console.log(res);
            console.log(res.data.products);
            // get to the array of objects via key 'products' under
            // inspect tool --> Console in React app
            // setProductList(res.data.product)
            setProductList(res.data.products)
            console.log(productList)
            })
            .catch((err) => {
            console.log(err);
            })
    },[])

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                console.log(res);
                // filter through products that don't match the id of the product that got deleted
                const updatedProductList = productList.filter((show) => show._id !== id)
                // by setting filter to a const variable, you can pass the variable
                // to the setter; this will cause the deleted product to go away
                // from view; otherwise, user will have to refresh page for the deleted
                // product to go away from view
                setProductList(updatedProductList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>All Products:</h2>
            {
                productList.map((product) => (
                    // each prop child should have its own key
                    // use each object's unique id from MongoDB
                    <div key={product._id}>
                        {/* use back-tick (i.e. `) to inject a variable*/}
                        {/* product._id --> product is the variable we designated from map */}
                        {/* map allows us to iterate through each product */}
                        <h3><Link to={`/viewProduct/${product._id}`}>{product.title}</Link></h3>
                        <Link to={`/editProduct/${product._id}`}>Edit</Link><br/>
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                        <p>--------------</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;