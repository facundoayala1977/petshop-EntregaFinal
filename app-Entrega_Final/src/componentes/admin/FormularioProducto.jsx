import { useEffect, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

function FormularioProducto({
    obtenerProductos,
    productoEditar,
    setProductoEditar
}) {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");

    useEffect(() => {

        if (productoEditar) {

            setNombre(productoEditar.nombre);
            setPrecio(productoEditar.precio);
            setStock(productoEditar.stock);
            setImagen(productoEditar.imagen);
            setDescripcion(productoEditar.descripcion);
            setCategoria(productoEditar.categoria || "");

        }

    }, [productoEditar]);

    const agregarProducto = async (e) => {

        e.preventDefault();

        if (
            nombre.trim() === "" ||
            categoria === "" ||
            Number(precio) <= 0 ||
            Number(stock) < 0
        ) {

            alert("Complete correctamente todos los campos.");

            return;

        }

        try {

            if (productoEditar) {

                const productoRef = doc(db, "productos", productoEditar.id);

                await updateDoc(productoRef, {

                    nombre,
                    precio: Number(precio),
                    stock: Number(stock),
                    imagen,
                    descripcion,
                    categoria

                });

                alert("Producto actualizado correctamente.");

                setProductoEditar(null);

            } else {

                await addDoc(collection(db, "productos"), {

                    nombre,
                    precio: Number(precio),
                    stock: Number(stock),
                    imagen,
                    descripcion,
                    categoria

                });

                alert("Producto agregado correctamente.");

            }

            await obtenerProductos();

            setNombre("");
            setPrecio("");
            setStock("");
            setImagen("");
            setDescripcion("");
            setCategoria("");

        } catch (error) {

            console.error(error);

            alert("Error al agregar el producto.");

        }

    };

    return (

        <div className="card p-4 mb-5">

            <h3 className="mb-4">
                Agregar Producto
            </h3>

            <form onSubmit={agregarProducto}>

                <div className="mb-3">

                    <label className="form-label">
                        Nombre
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Precio
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Stock
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Imagen
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Descripción
                    </label>

                    <textarea
                        className="form-control"
                        rows="3"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Categoría
                    </label>

                    <select
                        className="form-select"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >

                        <option value="">Seleccione una categoría</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Juguetes">Juguetes</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Descanso">Descanso</option>

                    </select>

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    {productoEditar ? "Guardar Cambios" : "Agregar Producto"}
                </button>

            </form>

        </div>

    );

}

export default FormularioProducto;