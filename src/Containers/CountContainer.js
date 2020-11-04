import React, {useState} from 'react'
import ItemCount from '../Components/ItemCount'

export default function ItemCountContainer ({min, max}) {

    // Estado local
    const [itemUnits, setItemUnits] = useState(0);

    // metodo para sumar y restar
    const onAdd = (sign) => {
        if ((sign === '+') && (itemUnits < max)) setItemUnits(itemUnits + 1);
        if ((sign === '-') && (itemUnits > min
            )) setItemUnits(itemUnits - 1);
    }

    return (
        <div>
            <ItemCount itemUnits={itemUnits} onAdd={onAdd} />
        </div>
    )
    };