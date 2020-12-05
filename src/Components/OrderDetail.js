import React from 'react'
import { GetDB } from '../tools/firebaseFactory';

const DB = GetDB();
const OrderDetail = () => {
    
    const newOrderTem = {
        cliente:{nombre:"Roberto", telefono:"123 456 7890", email:"rober@mail.com",},
        items: [{id:"f1gEJ1wtA4msWjjc8Yoa"},{id:"uM01ATcCygo4R1CC1IZs"},{id:"f1gEJ1wtA4msWjjc8Yoa"},{id:"uM01ATcCygo4R1CC1IZs"}],
    }

    const newOrder = {...newOrderTem, total:newOrderTem.items.length,}

    function postNewOrder() {
        const orders = DB.collection("orders");
        orders
            .add(newOrder)
            .then(({ id }) => {
                console.log(`se creó la orden bajo el id: ${id} pa`)
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
            })
    }
    
    return(
        <div>
            <h1>Tu pedido es</h1>
            <p>{newOrder.cliente.nombre}</p>
            <p>{newOrder.cliente.telefono}</p>
            <p>{newOrder.cliente.email}</p>
            <p>{newOrder.total}</p>
            <button onClick={postNewOrder}>Crear Orden</button>
        </div>
    )
}

export default OrderDetail