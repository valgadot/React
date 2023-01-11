import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined} from "@mui/icons-material"; 

const CartWidget = () => {
    return (
        <Badge badgeContent={5} color="secondary">
            <ShoppingCartOutlined/>
        </Badge>
    ); 
}

export default CartWidget;