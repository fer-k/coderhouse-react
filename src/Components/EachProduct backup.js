import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useCartContext} from '../Context/CartContext'

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 1000)
    })
}

const EachProduct = ({ProductList}) => {

    const {addProduct} = useCartContext();
    
    const [SourceData, setSourceData] = useState([]);
    
    useEffect(() => {
        getPromise( ProductList ).then(result => setSourceData(result));
    }, [ProductList])
    
    return (
        SourceData.map((item, i) => {
            
            return <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link to={`/${item.id}`}><button>Detalles del Producto</button></Link>
            <button onClick={() => addProduct(item)}>Agregar al carrito</button>
            </div>
            
            
        }
        ))
    }
    
    export default EachProduct