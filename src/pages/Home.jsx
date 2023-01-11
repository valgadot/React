import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer"; 
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
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
    );

}

export default Home; 