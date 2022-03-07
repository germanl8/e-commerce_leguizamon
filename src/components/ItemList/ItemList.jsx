import Item from "../Item/Item";





const ItemList = ({ items,  }) => {


    return (

        <>
            {items.map((prod) =>
                
                    <Item
                        key={prod.id}
                        category={`${prod.category}`}
                        picture={prod.pictureUrl}
                        title={prod.title}
                        price={prod.price}
                        stock={prod.stock}
                    >
                    </Item>




                // <Item></Item>

            )

            }

        </>
    )

}

export default ItemList 