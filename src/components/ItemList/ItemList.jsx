import Item from "../Item/Item";





const ItemList = ({ items }) => {


    return (

        <>
            {items.map((prod) => <Item key={prod.id} prod={prod} />
                // <Item></Item>

            )

            }

        </>
    )

}

export default ItemList 