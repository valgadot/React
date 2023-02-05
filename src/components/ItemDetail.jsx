import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import {Shop} from "../context/ShopProvider";
import ItemCount from './ItemCount';
import {DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price} from './styledComponents';

const ItemDetail = ({item}) => {
     
    const [quantity, setQuantity] = useState(0)
    
    const {addProduct} =useContext(Shop)

    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.");
        setQuantity(qty)
        addProduct({...item, quantity:qty})
    }

    return (
        <>
    <DetailContainer>
        <WrapperDetail>
            <ImgContainer>
            <ImageDetail src={item.image[0]} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <Price>${item.cost}</Price>
                <Desc>{item.stock} unidades en stock</Desc>
            </InfoContainer>
            </WrapperDetail>
            </DetailContainer>
            { 
            quantity === 0 ? 
            <ItemCount stock={item.stock} 
            initial={1} 
            onAdd={onAdd} />
        
        : <button>
             <Link to="/cart">
              Go to cart
             </Link>
         </button>
}
</>
);

}

export default ItemDetail;