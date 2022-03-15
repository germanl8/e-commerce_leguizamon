import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

  return (


    <>

      <div class="container-img">
        <img src={`${producto.pictureUrl}`} alt="" />
      </div>
      <div class='container-detail'>
       
          <div>
            <h1>{producto.title}</h1>
            <h2>Catergoría: {producto.category}</h2>
          </div>
          <div class='detail'>
            <ul>
              <li class='price'>$ {producto.price}</li>
              <li>{producto.description}</li>
              <li>Disponible: ({producto.stock}) unidades</li>
              <li>Talles: {producto.size}</li>
            </ul>
            <ItemCount stock={producto.stock} initial={1}></ItemCount>
          </div>

       


      </div>
    </>



  )
}


export default ItemDetail