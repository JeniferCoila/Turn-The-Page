import React, { useContext } from "react";
import "./LoginContainer.scss";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  const { userData, registerUser } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    registerUser({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };
  return (
    <section>
      <div className="vlp-login-form">
        <div className="vlp-login-form-container col-md-4">
          <div className="vlp-login-form-header">
            <h2>Iniciar sesión</h2>
          </div>
          <div className="vlp-login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="vlp-login-form-footer">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
            </form>
            <Link to="/signup" className="vlp-product-item-link">
              <span className="badge badge-light">Registrate aquí</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
