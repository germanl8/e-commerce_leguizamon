import React, { useState } from "react"
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'



const ItemDetailContainer = ({ greeting }) => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()
    console.log(detalleId);

    useEffect(() => {
        getFetch // llamada a la api
            .then((resp) => setProducto(resp.find(prod => prod.id === detalleId)))
            .catch(err => console.log(err)) //captura el error al romperse la app
            .finally(() => setLoading(false))
    }, [])

    console.log(producto);

    return (

        <>
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
                <div className='container-itemDetail'>
                    <ItemDetail producto={producto}></ItemDetail>
                </div>

            }

        </>

    )




}

export default ItemDetailContainer;