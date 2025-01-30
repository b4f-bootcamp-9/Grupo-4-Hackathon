import React from "react";
import { Link } from "react-router-dom"; // Import the useNavigate hook
import "../HomePage/HomePage.css";
import "../FormPage/FormPage"
import "../ContactPage/ContactPage"
import images from "../../Images/main.jpg"
import {Navbar} from "../Navbar/Navbar"
import Footer  from '../Footer/Footer';

export function HomePage() {
    return (
        <body>
            <Navbar/>
            <div className="home-container-hp">
                <div className="banner-wrapper">
                    <section className="text-wrapper">
                        <div className="knockout-text gradient">
                            <div className="knockout-text__background">
                                <p className="text line-01">Soci</p>
                                <p className="text line-02">Arte</p>
                            </div>
                        </div>
                    </section>
                </div>
                

                <div className="sociarte-container">
                 <div className="image-section">
                 <div className="background-hp">
                </div>
                </div>

      <div className="text-section-hp-one">
        <h1 className="title-hp-one">SociArte</h1>
        <p className="description-hp-one">
          Um projeto com a ambição de dar uma segunda vida a roupas de crianças juntando 
          <strong> Arte, Sustentabilidade e Diversão.</strong>
        </p>
        <p className="description-hp-one">
          Pede a tua <strong>Mystery Box 100% gratuita</strong>, 
          com 5 peças de roupa escolhidas por nós e vive a vida com mais cor.
        </p>
        <div className="button-cont"  >
                            <div className="button-box" >
                                <Link to={"/formulario"}>
                                    <button className="button-hello">
                                        Pede a tua Box
                                    </button>
                                </Link>
                            </div>
                        </div>
      </div>
    </div>

                {/* Carrossel */}
                <section className="carrossel-section">
                    <div className="homepage-container">
                        <div>
                            <input type="radio" name="position" checked />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                        </div>
                        <main id="carousel">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </main>
                    </div>
                </section>

                {/* Sobre Nós */}
                <section className="contact-section-hp">
                    <div className="contact-content-hp">
                        <h2 className="texto-bottom">
                            És um artista que queres contribuir para o nosso projeto? <br />
                            Vem fazer parte da nossa equipa.
                        </h2>
                        <div className="button-box">
                        <Link to={"/contato"}>
                    <button className="button-hello">
                        Contacta-nos
                    </button>
                </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </body>
    );
}

export default HomePage;