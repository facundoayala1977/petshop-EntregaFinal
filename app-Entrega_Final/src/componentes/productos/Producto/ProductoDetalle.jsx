import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarritoContext } from '../../../context/CarritoContext';

import { db } from "../../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cantidad, setCantidad] = useState(1);
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {

        const obtenerProducto = async () => {

            try {

                const productoRef = doc(db, "productos", id);

                const snapshot = await getDoc(productoRef);

                if (snapshot.exists()) {

                    setProducto({
                        id: snapshot.id,
                        ...snapshot.data()
                    });

                } else {

                    console.log("Producto no encontrado");

                }

            } catch (error) {

                console.error("Error al cargar el producto:", error);

            }

        };

        obtenerProducto();

    }, [id]);

    if (!producto) {
        return <h2>Cargando detalle del producto...</h2>;
    }

    if (!producto.id) {
        return <h2>Producto no encontrado.</h2>;
    }

    return (
        <div className="container py-5">
            <div className="card shadow border-0">
                <div className="row g-0">

                    <div className="col-md-5 p-4 text-center">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="img-fluid"
                            style={{ maxHeight: "500px", objectFit: "contain" }}
                        />
                    </div>

                    <div className="col-md-7">
                        <div className="card-body p-5">

                            <h1 className="fw-bold mb-3">
                                {producto.nombre}
                            </h1>

                            <h2 className="text-primary fw-bold mb-4">
                                ${producto.precio.toLocaleString("es-AR")}
                            </h2>

                            <p className="lead">
                                {producto.descripcion}
                            </p>

                            <div className="mb-4">
                                <span className="badge bg-success fs-6">
                                    Stock disponible: {producto.stock}
                                </span>
                            </div>

                            <div className="d-flex align-items-center gap-3 mb-4">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                                >
                                    -
                                </button>

                                <span className="fs-5">{cantidad}</span>

                                <button
                                    className="btn btn-outline-secondary"
                                    disabled={cantidad >= producto.stock}
                                    onClick={() => {
                                        if (cantidad < producto.stock) {
                                            setCantidad(cantidad + 1);
                                        }
                                    }}
                                >
                                    +
                                </button>
                            </div>

                            <div className="d-flex gap-3">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                        agregarAlCarrito(producto, cantidad);
                                        alert(`${cantidad} unidad(es) de ${producto.nombre} agregada(s) al carrito`);
                                    }}

                                >
                                    Agregar al carrito
                                </button>

                                <button
                                    className="btn btn-outline-secondary btn-lg"
                                    onClick={() => setFavorito(!favorito)}
                                >
                                    {favorito ? "❤️ Favorito" : "🤍 Favorito"}
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;