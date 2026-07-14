import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import ProductosDestacados from "../ProductosDestacados/ProductosDestacados";


function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.titulo}>Bienvenidos a Nuestro PetShop 🐶🐱</h1>
      <h2 className={styles.slogan}>Porque tu mascota es parte de tu familia</h2>
      <p className={styles.texto}>
        En nuestro PetShop creemos que cada mascota es parte de la familia. 
        Por eso ofrecemos productos de calidad, pensados para cuidar su salud, 
        su alimentación y su diversión. 
      </p>
      <p className={styles.texto}>
        Queremos acompañarte en cada etapa de la vida de tu compañero fiel, 
        brindándote atención cercana y un espacio donde siempre encontrarás 
        lo mejor para ellos.
      </p>
      <ProductosDestacados />
      <Link to="/productos" className={styles.boton}>Ver Productos</Link>
    </div>
  );
}

export default Home;
