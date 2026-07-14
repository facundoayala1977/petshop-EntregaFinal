import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = async (e) => {

        e.preventDefault();

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Inicio de sesión correcto.");

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
                Iniciar Sesión
            </h2>

            <form onSubmit={iniciarSesion}>

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
                    className="btn btn-primary"
                >
                    Iniciar sesión
                </button>

            </form>

        </div>

    );

}

export default Login;