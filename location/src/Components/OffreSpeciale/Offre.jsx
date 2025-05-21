import React from "react";
import chauffeur from "../../assets/chauffeur.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import gps from "../../assets/GPS.avif";
import siége from "../../assets/siége.jpg";
import { Link } from "react-router-dom";
///import Chauffeur from "../OffreSpeciale/Chauffeur";
import "./Offre.css";
function Offre() {
  return (
    <div className="">
      <div className="plane">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <h2>Nos offres spéciales</h2>
                <span>Agence de location voiture en Tunisie</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={chauffeur} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>Location voiture avec chauffeur</h3>
                  <p>
                     Profitez de votre voyage en toute sérénité avec nos
                    chauffeurs professionnels et un service personnalisé.Découvrez maintenant
                  </p>

                  <Link to="/Chauffeur">
                    <button type="button" className="read_more">
                      Découvrez notre offre
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={gps} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>Location voiture avec GPS</h3>
                  <p>
                    Avec DriveEasy ,optez pour notre service de location de
                    voiture avec GPS intégré,pour des déplacements fluides et
                    efficaces.
                  </p>
                  <Link to="/Gps">
                    <button type="button" className="read_more">
                      Découvrez notre offre
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={siége} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>Location voiture avec avec siège enfant </h3>
                  <p>
                    Offrez à votre enfant une sécurité optimale lors de vos
                    déplacements grâce à notre service de location de voiture
                    avec siège enfant intégré.
                  </p>
                  <Link to="/Siege">
                    <button type="button" className="read_more">
                      Découvrez notre offre
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offre;
