import React, { useContext } from "react";
import "./LoginContainer.scss";
import { LoginContext } from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
// import 
const LoginContainer = () => {
  const { registerUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      lastname: e.target.lastName.value,
      phone: e.target.phone.value,
    }).then(() => {
      alert("Bienvenido, ya puedes iniciar sesión");
      navigate("/myaccount");
    }).catch(() => {
      alert("Error al registrarse, por favor intente nuevamente");
    });
  };
  return (
    <section>
      <div className="vlp-login-form">
        <div className="vlp-login-form-container col-md-4">
          <div className="vlp-login-form-header">
            <h2>Registro</h2>
          </div>
          <div className="vlp-login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Ingrese su apellido"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Celular</label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  aria-describedby="phoneHelp"
                  placeholder="Ingrese su número de celular"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su correo electrónico"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  required 
                />
              </div>

              <div className="vlp-login-form-footer">
                <button type="submit" className="btn btn-primary">
                  Registrarme
                </button>
              </div>
            </form>
            <Link to="/myaccount" className="vlp-product-item-link">
              <span className="badge badge-light">Iniciar Sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
