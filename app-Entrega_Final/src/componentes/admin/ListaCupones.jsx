import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ListaCupones({ cupones, obtenerCupones }) {

    const eliminarCupon = async (id) => {

        const confirmar = window.confirm(
            "¿Eliminar este cupón?"
        );

        if (!confirmar) return;

        try {

            await deleteDoc(doc(db, "cupones", id));

            alert("Cupón eliminado correctamente.");

            obtenerCupones();

        } catch (error) {

            console.error(error);

            alert("Error al eliminar el cupón.");

        }

    };

    const cambiarEstado = async (cupon) => {

        try {

            const cuponRef = doc(db, "cupones", cupon.id);

            await updateDoc(cuponRef, {

                activo: !cupon.activo

            });

            await obtenerCupones();

        } catch (error) {

            console.error(error);

            alert("Error al cambiar el estado del cupón.");

        }

    };

    return (

        <table className="table table-striped">

            <thead>

                <tr>

                    <th>Código</th>
                    <th>Descuento</th>
                    <th>Estado</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {cupones.map((cupon) => (

                    <tr key={cupon.id}>

                        <td>{cupon.codigo}</td>

                        <td>{cupon.descuento}%</td>

                        <td>
                            <span
                                className={`badge ${cupon.activo ? "bg-success" : "bg-secondary"
                                    }`}
                            >
                                {cupon.activo ? "Activo" : "Inactivo"}
                            </span>
                        </td>

                        <td>

                            <button
                                className={`btn btn-sm me-2 ${cupon.activo ? "btn-warning" : "btn-success"
                                    }`}
                                onClick={() => cambiarEstado(cupon)}
                            >
                                {cupon.activo ? "Desactivar" : "Activar"}
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarCupon(cupon.id)}
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

export default ListaCupones;