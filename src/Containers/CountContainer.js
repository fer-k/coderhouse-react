import React, {useState} from 'react'
import ItemCount from '../Components/ItemCount'

export default function ItemCountContainer () {

    // Estado local
    const [itemUnits, setItemUnits] = useState(0);

    // metodo para sumar y restar
    const onAdd = (sign) => {
        if (sign === '+') setItemUnits(itemUnits + 1);
        if (sign === '-') setItemUnits(itemUnits - 1);
    }

    return (
        <div>
            <ItemCount itemUnits={itemUnits} onAdd={onAdd} />
        </div>
    )
    };