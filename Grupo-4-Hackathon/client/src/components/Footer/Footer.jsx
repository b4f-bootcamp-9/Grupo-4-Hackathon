import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
         
          <div className="footer-section">
            <h3>Mystery Box</h3>
            <p>
              Com base nas tuas escolhas, montamos uma Caixa Surpresa Solidária com roupas gratuitas. 
              Cada caixa é personalizada por artistas voluntários, tornando cada entrega única e especial.
            </p>
          </div>

          
          <div className="footer-section">
            <h3>Contactos</h3>
            <ul>
              <li>Email: info@sortarte.pt</li>
              <li>Tel: +351 910 000 000</li>
              <li>Morada: Avenida da Felicidade, 888, Lisboa</li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/privacidade">Política de Privacidade</a></li>
              <li><a href="/cookies">Política de Cookies</a></li>
              <li><a href="/termos">Termos de Utilização</a></li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h3>Juntas de Freguesia</h3>
            <ul>
              <li>Junta de Freguesia do Porto</li>
              <li>Junta de Freguesia de Lisboa</li>
              <li>Junta de Freguesia de Sintra</li>
              <li>Junta de Freguesia do Algarve</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;