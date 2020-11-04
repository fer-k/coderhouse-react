import React, {useState, useEffect} from 'react';
import ProductsContainer from '../Containers/ProductsContainer';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 2000)
    })
}

const EachProduct = ({ProductList}) => {

    const [SourceData, setSourceData] = useState([]);

    useEffect(() => {
        getPromise( ProductList ).then(result => setSourceData(result));
    }, [ProductList])

    return (
        SourceData.map((item, i) => {
            return <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        }
    ))
}

export default EachProduct