import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import FormularioProducto from "./FormularioProducto";
import ListaProductos from "./ListaProductos";

function Admin() {

    const [productos, setProductos] = useState([]);

    const [productoEditar, setProductoEditar] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const obtenerProductos = async () => {

        setLoading(true);
        setError("");

        try {

            const productosRef = collection(db, "productos");

            const snapshot = await getDocs(productosRef);

            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setProductos(lista);

        } catch (error) {

            console.error(error);
            setError("No fue posible cargar los productos. Vuelva a intentarlo.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        obtenerProductos();

    }, []);

    return (

        <div className="container mt-5">

            <h1 className="mb-4">
                Panel de Administración
            </h1>

            <FormularioProducto
                obtenerProductos={obtenerProductos}
                productoEditar={productoEditar}
                setProductoEditar={setProductoEditar}
            />

            <hr className="my-5" />

            <ListaProductos
                productos={productos}
                loading={loading}
                error={error}
                setProductoEditar={setProductoEditar}
                obtenerProductos={obtenerProductos}
            />

        </div>

    );

}

export default Admin;