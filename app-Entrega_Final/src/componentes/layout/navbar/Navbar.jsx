import { useState, useContext } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Navbar() {

  const { totalProductos } = useContext(CarritoContext);

  const { usuario, cerrarSesion } = useContext(AuthContext);

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className={styles.navbar}>

      <button
        className={styles.hamburguesa}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <ul className={`${styles.navList} ${menuAbierto ? styles.activo : ""}`}>
        <li><Link to="/" className={styles.link}>Inicio</Link></li>
        <li><Link to="/productos" className={styles.link}>Productos</Link></li>
        <li><Link to="/carrito" className={styles.link}>Carrito ({totalProductos})</Link></li>
        <li><Link to="/contacto" className={styles.link}>Contacto</Link></li>
        {!usuario ? (
          <>
            <li>
              <Link to="/registro" className={styles.link}>
                Registro
              </Link>
            </li>

            <li>
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.link}>
              Hola, {usuario.email}
            </li>

            <li>
              <button
                onClick={cerrarSesion}
                className={styles.botonLogout}
              >
                Cerrar sesión
              </button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;