import React from 'react';
import { useHistory } from 'react-router-dom'; // Para navegação entre páginas

const HomePage = () => {
  const history = useHistory();

  // Função para redirecionar para o formulário
  const handleClick = () => {
    history.push('/formulario'); // Redireciona para a página de formulário
  };

  return (
    <div className="home-container">
      <img 
        src="/caixa.png" 
        alt="Imagem Centralizada" 
        className="central-image" 
      />
      <button onClick={handleClick} className="button-pedir">
        Pedir
      </button>
    </div>
  );
};

export default HomePage;
