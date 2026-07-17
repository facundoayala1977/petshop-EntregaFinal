import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

function FormularioCupon({ obtenerCupones }) {

    const [codigo, setCodigo] = useState("");
    const [descuento, setDescuento] = useState("");

    const agregarCupon = async (e) => {

        e.preventDefault();

        if (
            codigo.trim() === "" ||
            Number(descuento) <= 0
        ) {
            alert("Complete correctamente los datos.");
            return;
        }

        try {

            await addDoc(collection(db, "cupones"), {

                codigo: codigo.toUpperCase(),
                descuento: Number(descuento),
                activo: true

            });

            alert("Cupón agregado correctamente.");

            setCodigo("");
            setDescuento("");

            await obtenerCupones();

        } catch (error) {

            console.error(error);

            alert("Error al agregar el cupón.");

        }

    };

    return (

        <div className="card p-4 mb-5">

            <h3>Gestión de Cupones</h3>

            <form onSubmit={agregarCupon}>

                <div className="mb-3">

                    <label>Código</label>

                    <input
                        className="form-control"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />

                </div>

                <div className="mb-3">

                    <label>Descuento (%)</label>

                    <input
                        type="number"
                        className="form-control"
                        value={descuento}
                        onChange={(e) => setDescuento(e.target.value)}
                    />

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Agregar Cupón
                </button>

            </form>

        </div>

    );

}

export default FormularioCupon;