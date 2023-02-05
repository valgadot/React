import React, {useState} from "react";
import {createContext} from "react";

export const Shop = createContext()

const ShopProvider = ({children}) => {
    
    const [products, setProducts] = useState([])

    const addProduct = (item) => {
        const isInCart = isProductInCart(item.id);
         if (isInCart) {

            const productoRepetido = products.find(element => element.id === item.id)
            productoRepetido.qty += item.qty 
            setProducts ([...products])
         } else {
            setProducts([...products, item])
         }

    }

const countCart = () => {
    let cantidadTotal = 0;
    for (const item of products) {
        cantidadTotal += item.qty
    }
    return cantidadTotal
}

const isProductInCart = (id) => {
    return products.some(item => item.id === id)
}

const total = () => {
    let total = 0; 
    for (const item of products) {
        total += item.cost * item.qty
    }

    return total; 
}

const cleanCart = () => {
    setProducts([])
}

return (
    <ShopProvider valie = {{products, addProduct, countCart, total, cleanCart}}>
    {children}
    </ShopProvider>
)

}

export default ShopProvider