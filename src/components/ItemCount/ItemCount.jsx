import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import '../ItemCount/ItemCount.css'



function ItemCount({ stock, initial, onAdd}) {


    const [count, setCount] = useState(initial)

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const removeCount = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
    }



    const [cart, setCart] = useState('counting')

    const handleInter = () => {
        setCart('buying')
    }

    const ButtonCount = ({ handleInter }) => {
        return <button className='btn-addCart' onClick={handleInter}>Agregar al carrito</button>
    }

    const ButtonBuying = () => {
        return (
            <Link to='/cart'>
                <button className='btn-buyingCart' onClick={agregar}>Finalizar la compra</button>
            </Link>
        )

    }


    return (
        <div className='container-addcart'>
            <div className='container-count'>
                <button className='removeCount' onClick={removeCount}>-</button>
                <label className='count-lbl'>{count}</label>
                <button className='addCount' onClick={addCount}>+</button>
            </div>

            <div className='container-btn-addCart'>
                {
                    cart === 'counting' ?
                        <ButtonCount handleInter={handleInter} />
                        :
                        <ButtonBuying />
                }
            </div>

        </div>




    )
}

export default ItemCount