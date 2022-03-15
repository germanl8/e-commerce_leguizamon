import React, { useState } from "react"
import { getFetch } from "../../Mock/getFetch"
import { useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {

        if (categoriaId) {

            getFetch // llamada a la api
                .then((res) => {

                    return res
                })
                .then((resp) => setProductos(resp.filter(pro => pro.category === categoriaId)))
                .catch(err => console.log(err)) //captura el error al romperse la app
                .finally(() => setLoading(false))

        } else { //Entra cuando cateogiaId es undefined

            getFetch // llamada a la api
                .then((res) => {

                    return res
                })
                .then((resp) => setProductos(resp))
                .catch(err => console.log(err)) //captura el error al romperse la app
                .finally(() => setLoading(false))
        }

    }, [categoriaId])


    console.log(categoriaId);


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