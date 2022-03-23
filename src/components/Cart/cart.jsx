import React from 'react';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';



function Cart() {

  const { cartList, vaciarCart } = useCartContext()
  console.log(cartList);

  return (

    <div className='container-cart'>

      {cartList.map(producto =>

        <div className='container-cart-detail'>
          
          <div className='data'>
          <img src={producto.pictureUrl} alt="" />
            <h1>{producto.title}.</h1>
            <h2>{producto.description}.</h2>
            <li className='cantidad'>Cantidad: {producto.cantidad}.</li>
            <li className='prices'>Precio unidad: ${producto.price}.</li>
          </div>
          
        </div>
      )}
      <button className='vaciar' onClick={vaciarCart}>Vaciar Carrito</button>
      
    </div>


  )
}

export default Cart