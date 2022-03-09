import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
  return (




    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={`${producto.pictureUrl}`} />
    //   <Card.Body>
    //     <Card.Title>{producto.title}</Card.Title>
    //     <Card.Text>
    //       Remera blanca clásica 100% algodón.
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Body>
    //     <ListGroup className="list-group-flush">
    //       <ListGroupItem>Categoría: {producto.category}</ListGroupItem>
    //       <ListGroupItem>$ {producto.price}</ListGroupItem>
    //       <ListGroupItem>{producto.description}</ListGroupItem>
    //       <ListGroupItem>Talles: {producto.size}</ListGroupItem>
    //       <ListGroupItem>Disponibles: {producto.stock}</ListGroupItem>.
    //     </ListGroup>
    //   </Card.Body>
    //   <ItemCount stock={producto.stock} initial={1} />

    // </Card>




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