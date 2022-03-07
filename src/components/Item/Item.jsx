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
                        Precio:
                        ${price}
                        <Card.Text>
                            Disponibles: {stock}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"> Ver detalles</Button>
                    </Card.Footer>
                    {/* <ItemCount stock={stock} initial={1} onAdd={mostrarCantidad} /> */}
                </Card>

        </>



    )




}

export default Item;



