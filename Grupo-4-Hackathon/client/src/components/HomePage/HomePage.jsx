import React from "react";
import { Link } from "react-router-dom"; // Import the useNavigate hook
import "../HomePage/HomePage.css";
import "../FormPage/FormPage"

export function HomePage() {
    return (
        <body>
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

                <section className="contact-section-hp">
                    <div className="contact-content-hp">
                        <h2 className="title-section-two">SociArte</h2>
                        <h4>
                            Um projeto com a ambição de dar
                            <br />
                            uma segunda vida a roupas de crianças juntando
                            <br />
                            Arte, Sustentabilidade e Diversão.
                        </h4>
                        <h4>
                            Pede a tua Mystery Box 100% gratuita, <br /> com 5 peças de
                            roupa escolhidas por nós e vive a vida com mais cor.
                        </h4>
                        <div className="button-cont"  >
                            <div className="button-box" >
                                <Link to={"/formulario"}>
                                    <button className="button-hello"
                                    // onClick={handlePedeBoxClick}
                                    >
                                        Pede a tua Box
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Carrossel */}
                <section className="carrossel-section">
                    <div className="homepage-container">
                        <input type="radio" name="position" checked />
                        <input type="radio" name="position" />
                        <input type="radio" name="position" />
                        <input type="radio" name="position" />
                        <input type="radio" name="position" />
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
                            <button className="button-hello">
                                Contactos
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    );
}

export default HomePage;