import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {

        const carritoGuardado =
            localStorage.getItem("carrito");

        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
        }

    }, []);

    useEffect(() => {

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            const carritoActualizado = carrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    };


    const disminuirCantidad = (id) => {
        const producto = carrito.find(
            (item) => item.id === id
        );

        if (producto.cantidad === 1) {
            eliminarProducto(id);
        } else {
            const carritoActualizado = carrito.map(
                (item) =>
                    item.id === id
                        ? {
                            ...item,
                            cantidad: item.cantidad - 1
                        }
                        : item
            );

            setCarrito(carritoActualizado);
        }
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(
            (producto) => producto.id !== id
        );

        setCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const totalProductos = carrito.reduce(
        (acumulador, producto) => acumulador + producto.cantidad,
        0
    )

    const totalCompra = carrito.reduce(
        (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
        0
    )

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                disminuirCantidad,
                eliminarProducto,
                vaciarCarrito,
                totalProductos,
                totalCompra
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};