import React from "react";
import './Siege.css';
function Siege() {
  return (
    <div className="container">
    <div className="def">
      <div className="pldetails">
        <h1 className="title">Location voiture avec Siége enfant</h1>
        <div className="description">
        <p>
          <span>DriveEasy</span>:Assurez la sécurité de votre enfant tout en profitant
          pleinement de votre voyage. Grâce à notre service de location de
          voiture avec siège enfant intégré, voyagez l'esprit tranquille en
          sachant que votre enfant est protégé et confortablement installé. Chez
          DriveEasy, nous veillons à rendre chaque déplacement sûr et agréable
          pour toute la famille.
        </p>
        <p>
          Disponible à partir de seulement 5DT par jour. Profitez d'une conduite
          agréable et sécurisée avec notre service de location de voiture avec
          siége d'enfant.
        </p>
        </div>
      </div>
      <div className="services">
        <h1 className="title">Nos services</h1>
        <div className="border-animation">
        <div className="service-list">
        <p className="service">Location de voiture à long terme <i className="fa-solid fa-water"></i></p>
        <p className="service">Location de voiture électrique <i className="fa-sharp fa-solid fa-plug"></i></p>
        <p className="service">Location de voiture de luxe <i className="fa-sharp fa-regular fa-face-smile"></i></p>
        <p className="service">Location voiture à domicile <i className="fa-regular fa-house"></i></p>
        <p className="service">Location de voiture familiale <i className="fa-solid fa-family"></i></p>
        <p className="service">Location de voiture avec chauffeur <i className=""></i></p>
        <p className="service">Location de voiture avec Wi-Fi <i className="fa-solid fa-wifi"></i></p>
        <p className="service">Location de voiture avec GPS <i className="fa-solid fa-location-dot"></i></p>
        <p className="service">Location de voiture avec siège enfant <i className="fa-solid fa-baby"></i></p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Siege;
