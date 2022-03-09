import React, { useState } from "react"
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css'



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
            <div className="container-header">
                <h1>{greeting}</h1>
            </div>

            {loading ? <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Cargando</span>
    </div>
                :
                
                <div className='container-cards'>
                    <ItemList className='ItemList' items={productos} />
                </div>

            }

        </>

    )




}

export default ItemListContainer;