import { useEffect, useState } from 'react';
import TarjetaContacto from './TarjetaContacto';

function Equipo() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar');
        return res.json();
      })
      .then(data => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando equipo...</p>;
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-flex justify-content-center flex-wrap gap-4">
      {usuarios.map(user => (
        <TarjetaContacto 
          key={user.id}
          nombre={user.nombre}
          email={user.email}
          cargo={user.cargo}
          imagen={user.imagen}
         />
      ))}
    </div>
  );
}

export default Equipo;