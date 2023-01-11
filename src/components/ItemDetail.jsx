import React from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import {DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price} from './styledComponents';

const ItemDetail = ({item}) => {
    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.");
    }

    return (
        <>
         {
    item && item.image
    ?
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
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </WrapperDetail>
    </DetailContainer>
    : <button className='btn btn-primary p-2'>
        <Link to="/cart">
            Go to cart
        </Link>
    </button>
}
</>
);

}

export default ItemDetail;