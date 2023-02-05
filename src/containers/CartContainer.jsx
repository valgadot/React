import React from "react";
import TableRow from "./TableRow";
import { Shop } from "../../context/ShopProvider";
import generateOrderObject from "../../services/generateOrderObject"
import {collection, addDoc} from "@firebase/firestore";
import { db } from "../../firebase/config";
import {doc, updateDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

const Cart = () => {
    const {products, total, cleanCart} = useContext(Shop);

    const [loader, setLoader] = useState(false);

    const confirmPurchase = async () => {
        
        try {
            setLoader(true);
            
            const order = generateOrderObject ({
                nombre: "Valeria",
                email: "valeria123@gmail.com",
                telefono: "32454222333",
                cart: products,
                total: total()
            })
            const docRef = await addDoc(collection(db, "orders"), order);
            cleanCart()

            for (const productCart of products) {
                const productRef = doc (db, "products", productCart.id);

                await updateDoc(productRef, {
                    stock: productCart.stock - productCart.qty
                });
            }

            alert("Orden de compra confirmada con ID" + docRef.id)
        } 
        catch(error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <>
        { 
        products.length !==0 ?
        <>
        <table>
            <thead>
                <tr>
                <th scope= "col">id</th>
                <th scope= "col">image</th>
                <th scope= "col">title</th>
                <th scope= "col">price</th>
                <th scope= "col">quantity</th>
                <th scope= "col">remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(item=> {
                    return <TableRow key={item.id} product={item}/>
                })}
            </tbody>
        </table>
        {
            loader ? 
            <h2>Cargando...</h2>
            : <button onClick={confirmPurchase}>Confirm purchase</button>
        }
        </>
        : 
        <>
        <h1>No hay productos en el carrito.</h1>
        <button>
            <Link to = "/">Home</Link>
        </button>
        </>
    }
    </>
    )
}

export default Cart 