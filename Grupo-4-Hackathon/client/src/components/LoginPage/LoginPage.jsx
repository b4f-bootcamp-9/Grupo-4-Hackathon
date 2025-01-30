import './LoginPage.css';
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3027/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Erro ao fazer login.");
      } else {
        localStorage.setItem("authToken", data.token); // Armazena o token corretamente
        navigate("/pedidos"); // Redireciona para a página "/pedidos"
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };

    return (
      <secton>
      <Navbar />
 <div class="login-box">
            <h2>Login</h2>
               <form onSubmit={handleSubmit} className="login-form">
                  <div class="user-box">
                   <input type="text" name="" required="" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Utilizador</label>
                  </div>
                  <div class="user-box">
                    <input type="password" name="" required=""
                   onChange={(e) => setPassword(e.target.value)}/>
                   <label>Palavra-passe</label>
                   {error && <p className="login-error">{error}</p>}
                   <button className="button-sad" type="submit">
                    Entrar
                  </button>
                  </div>
               </form>
    </div></secton>
    );
}