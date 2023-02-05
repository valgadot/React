import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined} from "@mui/icons-material"; 
import { useContext } from "react";
import { Shop } from "../context/ShopProvider";

const CartWidget = () => {
    
    const {countCart} = useContext(Shop)


    return (
        <Badge badgeContent={countCart} color="secondary">
            <ShoppingCartOutlined/>
        </Badge>
    ); 
}

export default CartWidget;