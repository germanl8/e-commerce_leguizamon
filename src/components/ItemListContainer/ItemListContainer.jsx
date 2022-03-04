import React, { useState } from "react"
import './ItemListContainer.css'
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting, mostrarCantidad }) => {

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
            <h1>{greeting}</h1>
            <ItemList />

            {/* <div className="container-items">
                
                <ItemCount stock={5} initial={1} onAdd={mostrarCantidad} />
            </div> */}



        </>

    )




}

export default ItemListContainer;