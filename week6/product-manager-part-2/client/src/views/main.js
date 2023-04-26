import React, {useState} from 'react'
import CreateProduct from '../components/CreateProduct'
import Display from '../components/Display'

const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
            <h1>Product Manager</h1>
            <CreateProduct/>
            <p>----------------------------------------</p>
            <Display productList={productList}
                setProductList={setProductList}/>
        </div>
    )
}

export default Main;