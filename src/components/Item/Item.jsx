import React, { useState } from "react"
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import '../Item/Item.css';
import ItemCount from "../ItemCount/ItemCount"


const Item = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch // llamada a la api
            .then((res) => {

                return res
            })
            .then((resp) => setProductos(resp))
            .catch(err => console.log(err)) //captura el error al romperse la app
            .finally(() => setLoading(false))
    }, [])

    console.log(productos);

    return (

        <>

            {loading ? <h1>Cargando...</h1>
                :
                productos.map((prod) =>

                    <>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={prod.pictureUrl} />
                            <Card.Body>
                                <Card.Title>{`${prod.title}`}</Card.Title>
                                <Card.Text>
                                    ${prod.price}
                                </Card.Text>
                                <Button variant="primary"> Ver detalles</Button>
                                <ItemCount stock={prod.stock} initial={1} />
                            </Card.Body>
                        </Card>

                    </>

                )
            }

        </>



    )




}

export default Item;



