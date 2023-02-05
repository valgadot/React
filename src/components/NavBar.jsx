import {AppBar} from "@material-ui/core";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidjet";
import {Wrapper, Logo, MenuItem, Left, Center, Right} from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Bruja Blanca</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/Aceites' style={{textDecoration: "none", color: "white"}}><MenuItem>Aceites</MenuItem></Link>
                    <Link to='/category/Cristales' style={{textDecoration: "none", color: "white"}}><MenuItem>Cristales</MenuItem></Link>
                    <Link to='/category/Libros' style={{textDecoration: "none", color: "white"}}><MenuItem>Libros</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem><CartWidget/></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;