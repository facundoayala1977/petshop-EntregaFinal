import React from 'react';
import styles from './FormularioProducto.module.css';

export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    return (
        <form className={styles.formulario} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Alimento Seco Perros"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio: $ </label>
                <input
                    type="number"
                    placeholder="Ej: 12500"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input 
                    type="number" 
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input 
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
}
