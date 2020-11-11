import React, {useState, useEffect} from 'react';
import ItemDetailContainer from '../Containers/ItemDetailContainer';
import ProductsContainer from '../Containers/ProductsContainer';
import { Link } from 'react-router-dom';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 1000)
    })
}

const EachProduct = ({ProductList}) => {

    const [SourceData, setSourceData] = useState([]);

    useEffect(() => {
        getPromise( ProductList ).then(result => setSourceData(result));
    }, [ProductList])
    
    return (
                SourceData.map((item, i) => {

            return <div key={item.id}>
                <h3>{item.title}</h3>
                {/* <p>{item.description}</p> */}
                <p>${item.price}</p>
            <Link to=`/${item.id}`><button>Detalles del Producto</button></Link>
                {/* <ItemDetailContainer/> */}
            </div>


}
))
}

export default EachProduct