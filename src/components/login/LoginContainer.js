import React, { useContext } from "react";
import "./LoginContainer.scss";
import { LoginContext } from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const { userData, loginUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then(()=> {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const nologin = () => {
    return (
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
    );
  };

  const login = () => {
    return (
      <div>
        <h1>Bienvenido {userData.name}</h1>
      </div>
    );
  };
  return <section>
    {userData.isLogged ? login() : nologin()}
  </section>;
};

export default LoginContainer;
