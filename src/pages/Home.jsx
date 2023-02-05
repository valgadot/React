import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "../containers/ItemDetailContainer"; 
import ItemListContainer from "../containers/ItemListContainer";
import NavBar from "../components/NavBar";
import ShopProvider from "../context/ShopProvider";

const Home = () => {
    return (
        <ShopProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path= '/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' elememt= {<ItemListContainer/>} />
            <Route path='/dato/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart'></Route>
            <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
        </Routes>
        </BrowserRouter>
        </ShopProvider>
    );

}

export default Home; 