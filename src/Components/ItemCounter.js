import React from 'react';

const ItemCounter = ({AddClick,RemoveClick}) => {
    return (
        <div>
        <button  onClick={AddClick}>Poné uno más</button>
        <button  onClick={RemoveClick}>Sacale uno</button>
        </div>
    )
}

export default ItemCounter