import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {

    const obtenerProductos = async () => {

      try {

        const productosRef = collection(db, "productos");

        const snapshot = await getDocs(productosRef);

        const productosFirestore = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProductos(productosFirestore);

      } catch (error) {

        console.error("Error al obtener productos:", error);

      }

    };

    obtenerProductos();

  }, []);

  const productosFiltrados = productos.filter((producto) => {

    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    return coincideNombre && coincideCategoria;

  });


  return (
    <div className="container">

      <h2>{mensaje}</h2>

      <div className="row mb-4">

        <div className="col-md-8 mb-2 mb-md-0">

          <input
            type="text"
            className="form-control"
            placeholder="🔎 Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

        </div>

        <div className="col-md-4">

          <select
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Todas">Todas las categorías</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Juguetes">Juguetes</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Higiene">Higiene</option>
            <option value="Descanso">Descanso</option>
          </select>

        </div>

      </div>
      {productosFiltrados.length > 0 ? (
        <ItemList productos={productosFiltrados} />
      ) : (
        <div className="alert alert-warning text-center mt-4">
          <h5>No se encontraron productos.</h5>
          <p>Intentá con otro nombre.</p>
        </div>
      )}

    </div>
  );
}

export default ItemListContainer;