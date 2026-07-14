import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ListaProductos({
    productos,
    loading,
    error,
    setProductoEditar,
    obtenerProductos
}) {

    const eliminarProducto = async (id) => {

        const confirmar = window.confirm(
            "¿Está seguro que desea eliminar este producto?"
        );

        if (!confirmar) return;

        try {

            await deleteDoc(doc(db, "productos", id));

            await obtenerProductos();

            alert("Producto eliminado correctamente.");

        } catch (error) {

            console.error(error);

            alert("Error al eliminar el producto.");

        }

    };

    if (loading) {

        return (

            <div className="text-center my-5">

                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">
                        Cargando...
                    </span>

                </div>

                <p className="mt-3">
                    Cargando productos...
                </p>

            </div>

        );

    }

    if (error) {

        return (

            <div className="alert alert-danger">

                {error}

            </div>

        );

    }

    return (

        <table className="table table-striped">

            <thead>

                <tr>

                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {productos.map((producto) => (

                    <tr key={producto.id}>

                        <td>{producto.nombre}</td>

                        <td>{producto.categoria}</td>

                        <td>${producto.precio}</td>

                        <td>{producto.stock}</td>

                        <td>

                            <button className="btn btn-warning btn-sm me-2"
                                onClick={() => setProductoEditar(producto)}>
                                Editar
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarProducto(producto.id)}
                            >
                                Eliminar
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default ListaProductos;