import { Card, Button, Carousel } from 'react-bootstrap';
import '../Item/Item.css';
import ItemCount from "../ItemCount/ItemCount"


const Item = ({ category, picture, title, price, mostrarCantidad, stock }) => {

    return (

        <>

            <Card>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    Disponibles: {stock}
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Button className='btn-details' variant="primary"> Ver detalles</Button>
                </Card.Body>
                <ItemCount stock={stock} initial={1} onAdd={mostrarCantidad} />
            </Card>




        </>



    )




}

export default Item;



