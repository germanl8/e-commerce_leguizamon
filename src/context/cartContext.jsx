import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({ children }) {
    const [cartList, setcartList] = useState([])

    const agregarCart = (item) => {
        console.log(`esto es item.id: ${item.id}`);
        if (cartList.findIndex(items => { return items.id === item.id; }) === -1){
            setcartList([...cartList, item])
        }else alert("ya se encuentra el producto en el carrito")

        


    }

    const vaciarCart = () => {
        setcartList([])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart
        }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider