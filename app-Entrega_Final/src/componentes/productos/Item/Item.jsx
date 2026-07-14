import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { CarritoContext } from "../../../context/CarritoContext"

export function Item({ producto }) {

    console.log(producto);

    const [favorito, setFavorito] = useState(false);

    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <div className={styles.card} >

            <Link
                to={`/producto/${producto.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >

                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className={styles.imagen}
                />

                <h3 className="card-title fs-5">
                    {producto.nombre}
                </h3>

                <p className="card-tex">
                    Precio: ${producto.precio.toLocaleString("es-Ar")}
                </p>

            </Link>

            <p>Stock: {producto.stock}</p>

            <p className={styles.descripcion}>
                Descripcion: {producto.descripcion}
            </p>

            <div className={`d-flex justify-content-center align-items-center gap-3 ${styles.acciones}`}>

                <button
                    className="btn btn-primary"
                    onClick={() => agregarAlCarrito(producto)}
                >
                    Agregar
                </button>

                <span
                    onClick={() => setFavorito(!favorito)}
                    className={styles.estrella}
                >
                    {favorito ? "⭐" : "☆"}
                </span>

            </div>

        </div>
    );
}