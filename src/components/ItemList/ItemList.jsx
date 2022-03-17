import Item from "../Item/Item";

const ItemList = ({ items }) => {


    return (

        <div className="container-item">
            {items.map((prod) => <Item key={prod.id} prod={prod} />

            )

            }

        </div>

    )

}

export default ItemList 