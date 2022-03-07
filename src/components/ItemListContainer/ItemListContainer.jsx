import React, { useState } from "react"
import './ItemListContainer.css'
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greeting }) => {

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


    return (

        <>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1>
                :
                <div className='container-cards'>
                    <ItemList className='ItemList' items={productos} />
                </div>
                
            }

        </>

    )




}

export default ItemListContainer;