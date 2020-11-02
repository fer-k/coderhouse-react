import React from 'react'

const ItemCount = ({itemUnits, onAdd}) => {
  
    return (
        <div>
            <p>{itemUnits} items</p>
            <button onClick={()=>onAdd('+')}>sumar 1 item</button>
            <button onClick={()=>onAdd('-')}>restar 1 item</button>
        </div>
    )
}

export default ItemCount;