import React from "react";
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting, mostrarCantidad }) => {

    

    return (

        <div className="container-items">
            <h1>{greeting}</h1>
            <ItemCount stock= {5} initial={1} onAdd={mostrarCantidad}/>

        </div>



    )
}

export default ItemListContainer;