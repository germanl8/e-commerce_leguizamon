import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Item/Item.css';


const Item = ({ prod }) => {

    return (

        <>
            <div
                key={prod.id}
            >

                <Card>
                    <Card.Header>
                        <Card.Title>{`${prod.title}`}</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Card.Img variant="top" src={`${prod.pictureUrl}`} />

                        <Card.Text className='stock'>
                            Disponibles: {`${prod.stock}`} <br />
                        </Card.Text>
                        <Card.Text>
                            $ {`${prod.price}`}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/detalle/${prod.id}`}>
                            <Button className='btn-details' variant="primary"> Ver detalles</Button>
                        </Link>
                    </Card.Footer>

                    {/* <ItemCount stock={`${prod.stock}`} initial={1} /> */}
                </Card>

            </div>




        </>



    )




}

export default Item;



