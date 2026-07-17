import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

function Registro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrarUsuario = async (e) => {

        e.preventDefault();

        try {

            const credenciales = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await setDoc(doc(db, "usuarios", credenciales.user.uid), {

                email: credenciales.user.email,
                admin: false

            });

        } catch (error) {

            console.error(error);

            alert("Error: " + error.message);

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Registro de Usuario
            </h2>

            <form onSubmit={registrarUsuario}>

                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Registrarse
                </button>

            </form>

        </div>

    );

}

export default Registro;