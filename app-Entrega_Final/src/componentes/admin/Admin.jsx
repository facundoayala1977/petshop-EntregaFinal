import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import FormularioProducto from "./FormularioProducto";
import ListaProductos from "./ListaProductos";
import FormularioCupon from "./FormularioCupon";
import ListaCupones from "./ListaCupones";

function Admin() {

    const [productos, setProductos] = useState([]);

    const [cupones, setCupones] = useState([]);

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

    const obtenerCupones = async () => {

        try {

            const cuponesRef = collection(db, "cupones");

            const snapshot = await getDocs(cuponesRef);

            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setCupones(lista);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        obtenerProductos();
        obtenerCupones();

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

            <hr className="my-5" />

            <FormularioCupon
                obtenerCupones={obtenerCupones}
            />

            <ListaCupones
                cupones={cupones}
                obtenerCupones={obtenerCupones}
            />

        </div>

    );

}

export default Admin;