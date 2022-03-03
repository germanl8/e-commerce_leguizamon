import React from 'react'
import '../ItemCount/ItemCount.css'
import { useState } from 'react'



function ItemCount({ stock, initial, onAdd }) {

    const mostrarCantidad = () => {
        console.log({ count });
        console.log(`El stock es de ${stock} productos` );
    }

    const [count, setCount] = useState(1)

    const addCount = () => {
        if (count < stock ) {
            setCount(count + 1)
        }else alert(`No puede seleccionar mas de ${stock} productos por disponibilidad de stock`)
    }

    const removeCount = () => {
        if (count > initial){
            setCount(count - 1)
        }else alert('Seleccione minimo 1 producto')
        

    }

    return (
        <div className='container-addcart'>
            <div className='container-count'>
                <button className='removeCount' onClick={removeCount}>-</button>
                <label className='count-lbl'>{count}</label>
                <button className='addCount' onClick={addCount}>+</button>
            </div>

            <div className='container-btn-addCart'>
                <button className='btn-addCart' onClick={mostrarCantidad}>Agregar al carrito</button>
            </div>

        </div>




    )
}

export default ItemCount