import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

function Registro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrarUsuario = async (e) => {

        e.preventDefault();

        try {

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Usuario registrado correctamente.");

            setEmail("");
            setPassword("");

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