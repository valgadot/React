import {Button} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import { useState } from 'react';
import {ProductAmountContainer, ProductAmount} from './styledComponents';

const ItemCount = ({onAdd, stock, initial}) => {
    const [count, setCount] = useState(initial); 

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <ProductAmountContainer>
            <Button variant ="text" onClick={increment}><Add/></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={decrement}><Remove/></Button>
            {
                stock 
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to cart</Button>
            }
        </ProductAmountContainer>
    );
}

export default ItemCount;