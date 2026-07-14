import { useState } from "react";

export function FormularioContainer() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const [mensajeExito, setMensajeExito] = useState("");

  const manejarCambio = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  };

  const manejarEnvio = (e) => {

    e.preventDefault();

    if (
      formulario.nombre.trim() === "" ||
      formulario.email.trim() === "" ||
      formulario.asunto.trim() === "" ||
      formulario.mensaje.trim() === ""
    ) {

      alert("Complete todos los campos obligatorios.");

      return;

    }

    setMensajeExito("¡Gracias por contactarnos! Nos comunicaremos con usted a la brevedad.");

    setTimeout(() => {
      setMensajeExito("");
    }, 4000);

    setFormulario({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });

  };

  return (

    <div className="container my-5">

      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Contáctenos
        </h2>

        {mensajeExito && (
          <div className="alert alert-success" role="alert">
            {mensajeExito}
          </div>
        )}

        <form onSubmit={manejarEnvio}>

          <div className="mb-3">

            <label className="form-label">
              Nombre y Apellido *
            </label>

            <input
              type="text"
              className="form-control"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Correo electrónico *
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Teléfono
            </label>

            <input
              type="text"
              className="form-control"
              name="telefono"
              value={formulario.telefono}
              onChange={manejarCambio}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Asunto *
            </label>

            <input
              type="text"
              className="form-control"
              name="asunto"
              value={formulario.asunto}
              onChange={manejarCambio}
            />

          </div>

          <div className="mb-4">

            <label className="form-label">
              Mensaje *
            </label>

            <textarea
              className="form-control"
              rows="5"
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
            />

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Enviar consulta
          </button>

        </form>

      </div>

    </div>

  );

}