import React from "react";
import './Gps.css'
function Gps() {
  return (
    <div className="container">
    <div className="def">
      <div className="pldetails">
        <h1  className="title">Location voiture avec GPS</h1>
        <div className="description">
        <p >
          <span>DriveEasy:</span>Naviguez en toute simplicité avec notre service de location
          de voiture équipé d'un GPS intégré. Trouvez votre chemin facilement et
          ne vous perdez plus jamais lors de vos voyages. Avec DriveEasy,
          explorez de nouveaux horizons en toute confiance, grâce à notre
          système de navigation performant qui vous guide efficacement tout au
          long de votre parcours.
        </p>
        <p>
          Découvrez le copilote idéal pour vos voyages, disponible à partir de
          seulement 6DT par jour. Profitez d'une conduite agréable et sécurisée
          avec notre service de location de voiture avec GPS.
        </p>
        </div>
      </div>
      <div className="services">
        <h1 className="title">Nos services</h1>
        <div className="border-animation">
        <div className="service-list">
        <p  className="service">Location de voiture à long terme <i className="fa-solid fa-water"></i></p>
        <p  className="service">Location de voiture électrique <i className="fa-sharp fa-solid fa-plug"></i></p>
        <p  className="service">Location de voiture de luxe <i className="fa-sharp fa-regular fa-face-smile"></i></p>
        <p  className="service">Location voiture à domicile <i className="fa-regular fa-house"></i></p>
        <p  className="service">Location de voiture familiale <i className="fa-solid fa-family"></i></p>
        <p  className="service">Location de voiture avec chauffeur </p>
        <p  className="service">Location de voiture avec Wi-Fi  <i className="fa-solid fa-wifi"></i></p>
        <p  className="service">Location de voiture avec GPS <i className="fa-solid fa-location-dot"></i></p>
        <p  className="service">Location de voiture avec siège enfant  <i className="fa-solid fa-baby"></i></p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Gps;
