import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import React from "react"
export function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");      /*HomePage*/
  };

  const handleAdminClick = () => {
    navigate("/admin");/*Admin nav*/
  };

  const handleContatoClick = () => {
    navigate("/contato");/*ContactPage*/
  };

  const handleFormularioClick = () => {
    navigate("/formulario");/*Login*/
  };

  const handleLoginClick = () => {
    navigate("/login");/*HomePage*/
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/Images/logo.png"
          alt="Logo Principal"
          className="logo"
          onClick={handleHomeClick}
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/formulario" onClick={handleFormularioClick}>
            Requisitar
          </a>
        </li>
        <li>
          <a href="/login" onClick={handleLoginClick}>
            Login
          </a>
        </li>
        <li>
          <a href="/contato" onClick={handleContatoClick}>
            Contactos
          </a>
        </li>
        <li>
          <a href="/admin" onClick={handleAdminClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill user-icon" viewBox="0 0 14 14">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
