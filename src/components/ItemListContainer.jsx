import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../data/customFetch";
import { useEffect, useState } from "react";
import { useParams} from 'react-router';
const {products} = require('../data/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    console.log(idCategory);

    useEffect((idCategory) => { 
        customFetch(2000,products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [datos]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + "items.");
    }

    return (
        <>
        <ItemList items={datos}/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );

}

export default ItemListContainer;