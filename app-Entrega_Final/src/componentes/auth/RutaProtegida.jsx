import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function RutaProtegida({ children }) {

    const { usuario, esAdmin } = useContext(AuthContext);

    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    if (!esAdmin) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RutaProtegida;