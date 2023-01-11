import { useEffect, useState } from "react";
import {useParams} from "react-router";
import customFetch from "../data/customFetch";
import ItemDetail from "./ItemDetail";
const {products} = require('../data/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[idItem]);

    return (
        <div>
            {
                Object.keys(dato).length === 0
                 ? <h2>Loading...</h2>
                 : <ItemDetail item={dato}/>
            }
        
        </div>
    )
};

export default ItemDetailContainer;