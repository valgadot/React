import Item from "./Item";
import {ProductsContainer} from './styledComponents';

const ItemList =({items}) => {
    return (
        <ProductsContainer>
            {items.map(item => {
           
           return <Item id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />
           
            })}
        
        </ProductsContainer>
    );
}

export default ItemList;