import React, { useContext } from 'react';
import Logout from "./LogoutButton";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./Auth/Auth";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout, token } = useContext(AuthContext);
  console.log(token)
  const logOut = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/Home">
        <img src="https://www.uniovi.es/documents/31582/25056451/Escudo_UO_Horizontall_Color_PNG-01.png/afe1426a-7175-4b82-8a42-4531168617f1?t=1618385274937" width='200'
          className="d-inline-block align-top"
          alt="logo universidad de Oviedo"
        >
        </img>
      </Link>
      {!token && (
        <Link to="/LoginForm">
          Login
        </Link>
      )}
      {token && (
        <Logout logOut={logOut} />
      )}
    </nav>
  )
}
export default NavBar