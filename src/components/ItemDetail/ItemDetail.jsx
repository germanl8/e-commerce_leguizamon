import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/cartContext';
import '../ItemDetail/ItemDetail.css';
import './ItemDetail.css'

const ItemDetail = ({ producto, handleInter }) => {
  const [count, setCount] = useState(null)

  const { agregarCart, cartList } = useCartContext()

  const onAdd = (cant) => {
    console.log(cant);
    setCount(cant)
    agregarCart({ ...producto, cantidad: cant })
  }
  console.log(cartList);

  return (


    <>

      <div className="container-img">
        <img src={`${producto.pictureUrl}`} alt="" />
      </div>
      <div className='container-detail'>

        <div>
          <h1>{producto.title}</h1>
          <h2>Catergoría: {producto.category}</h2>
        </div>
        <div className='detail'>
          <ul>
            <li className='price'>$ {producto.price}</li>
            <li>{producto.description}</li>
            <li>Disponible: ({producto.stock}) unidades</li>
            <li>Talles: {producto.size}</li>
          </ul>
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} cart={handleInter}></ItemCount>
        </div>
      </div>
    </>



  )
}


export default ItemDetail