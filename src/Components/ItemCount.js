import React from 'react'

const ItemCount = () => {
    let itemUnits = 0;


    return (
        <div>
            <p>{itemUnits} items</p>
            <button>sumar 1 item</button>
            <button>restar 1 item</button>
        </div>
    )
}

export default ItemCount;