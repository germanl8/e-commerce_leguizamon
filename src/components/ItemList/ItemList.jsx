import Item from "../Item/Item";

const ItemList = ({ items }) => {


    return (

        <div className="container-item">
            {items.map((prod) => <Item key={prod.id} prod={prod} />

            )

            }

            {/* {items.map((prod) => <Item key={prod.id} prod={prod} />

            )

            } */}

        </div>
        // <Item></Item>

    )

}

export default ItemList 