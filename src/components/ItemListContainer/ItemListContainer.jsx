import React, { useState } from "react"
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";


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
            .finally(()=> setLoading(false))
        }, [])
        
        console.log(productos);

    return (

        <div className="container-items">
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={mostrarCantidad} />

        </div>



    )
}

export default ItemListContainer;