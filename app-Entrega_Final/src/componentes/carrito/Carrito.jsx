import { useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import React from 'react';
import styles from './Carrito.module.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

function Carrito() {
  const { carrito,
    agregarAlCarrito,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    totalCompra
  } = useContext(CarritoContext);

  const hayProductos = carrito.length > 0;
  const [codigoCupon, setCodigoCupon] = useState("");
  const [descuento, setDescuento] = useState(0);

  const aplicarCupon = async () => {

    try {

      const snapshot = await getDocs(collection(db, "cupones"));

      const cupon = snapshot.docs.find((doc) => {

        const datos = doc.data();

        return (
          datos.codigo.toUpperCase() === codigoCupon.toUpperCase() &&
          datos.activo
        );

      });

      if (cupon) {

        setDescuento(cupon.data().descuento);

        alert(`Cupón aplicado: ${cupon.data().descuento}% de descuento`);

      } else {

        alert("Cupón inválido");

        setDescuento(0);

      }

    } catch (error) {

      console.error(error);

      alert("Error al validar el cupón");

    }

  };

  return (
    <div className={styles.carrito}>
      <h2 className={styles.titulo}>🛒 Carrito de Compras</h2>

      {hayProductos ? (
        <>
          <div className={styles.listaProductos}>
            {carrito.map((prod) => (
              <div key={prod.id} className={styles.item}>
                <img src={prod.imagen} alt={prod.nombre} />
                <div className={styles.detalles}>
                  <h4>{prod.nombre}</h4>
                  <p>Precio: ${prod.precio.toLocaleString("es-Ar")}</p>
                  <div className={styles.contador}>
                    <button
                      className={styles.btnCantidad}
                      onClick={() => disminuirCantidad(prod.id)}
                    >
                      -
                    </button>

                    <span>
                      {prod.cantidad}
                    </span>

                    <button
                      className={styles.btnCantidad}
                      onClick={() => agregarAlCarrito(prod)}
                    >
                      +
                    </button>
                  </div>

                </div>
                <div className={styles.acciones}>
                  <button
                    className={styles.btnEliminar}
                    onClick={() => eliminarProducto(prod.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.resumen}>
            <p>
              Total: $
              {(totalCompra * (1 - descuento / 100)).toLocaleString("es-AR")}
            </p>

            {descuento > 0 && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                Descuento aplicado: {descuento}%
              </p>
            )}

            <div className={styles.cupon}>
              <input
                type="text"
                placeholder="Ingresa tu cupón de descuento"
                className={styles.inputCupon}
                value={codigoCupon}
                onChange={(e) => setCodigoCupon(e.target.value)}
              />
              <button
                className={styles.btnCupon}
                onClick={aplicarCupon}
              >
                Aplicar
              </button>
            </div>
          </div>


          <div className={styles.botones}>
            <button
              className={styles.btnVaciar}
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </button>
          </div>

          <div>
            <button className={styles.btnFinalizar}
              onClick={() => {
                alert("¡Gracias por tu compra!!!");
                vaciarCarrito();
              }}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={styles.mensaje}>No hay productos agregados todavía.</p>
          <Link
            to="/productos"
            className={styles.boton}
          >
            Ver Productos
          </Link>
        </>
      )}
    </div>
  );
}

export default Carrito;