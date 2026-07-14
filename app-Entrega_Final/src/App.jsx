import './App.css'
import Layout from './componentes/layout/Layout';
import Home from "./componentes/home/Home";
import Carrito from './componentes/carrito/Carrito'
import ProductoDetalle from './componentes/productos/Producto/ProductoDetalle';
import { ItemListContainer } from './componentes/productos/ItemListContainer/ItemListContainer';
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import Admin from "./componentes/admin/Admin";
import RutaProtegida from "./componentes/auth/RutaProtegida";
import Registro from "./componentes/auth/Registro";
import Login from "./componentes/auth/Login";


function App() {

  return (


    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/productos" element={<ItemListContainer
          mensaje={"Catálogo de Productos"} />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />  
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/contacto" element={<FormularioContainer />} />
        <Route path="/admin" element={<RutaProtegida>
                                          <Admin />
                                      </RutaProtegida>
                                      }
        />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>)
}

export default App;
