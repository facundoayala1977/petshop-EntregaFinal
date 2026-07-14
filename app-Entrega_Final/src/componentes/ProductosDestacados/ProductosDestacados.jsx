import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import styles from "./ProductosDestacados.module.css";

function ProductosDestacados() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const obtenerProductos = async () => {

            try {

                const productosRef = collection(db, "productos");

                const snapshot = await getDocs(productosRef);

                const lista = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProductos(lista.slice(0, 3));

            } catch (error) {

                console.error(error);

            }

        };

        obtenerProductos();

    }, []);

    return (

        <section className="container my-5">

            <h2 className="text-center mb-4">
                🌟 Productos Destacados
            </h2>

            <div className={styles.contenedor}>

                {productos.map((producto) => (

                    <div key={producto.id} className={styles.card}>

                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className={styles.imagen}
                        />

                        <h4>{producto.nombre}</h4>

                        <p>
                            ${producto.precio.toLocaleString("es-AR")}
                        </p>

                        <Link
                            to={`/producto/${producto.id}`}
                            className="btn btn-primary"
                        >
                            Ver Producto
                        </Link>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ProductosDestacados;