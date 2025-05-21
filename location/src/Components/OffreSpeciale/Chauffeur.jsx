import React from "react";
import './Chauffeur.css'
function Chauffeur() {
  return (
    <div className="container">
    <div className="def">
    <div className="pldetails">
      <h1 className="title">Location voiture avec chauffeur</h1>
      <div className="description">
      <p >
        <span>DriveEasy:</span>Avec DriveEasy, trouvez la relaxation et le confort ultime
        lors de vos déplacements. Nos chauffeurs professionnels vous assurent
        une conduite sûre et fluide, vous permettant de vous détendre et de
        profiter pleinement du voyage. Simplifiez vos déplacements avec notre
        service de location de voiture avec chauffeur, et laissez-nous vous
        conduire en toute sérénité vers votre destination.
      </p>
      <p>
        Découvrez le copilote idéal pour vos voyages, disponible à partir de
        seulement 10DT par jour. Profitez d'une conduite agréable et sécurisée
        avec notre service de location de voiture avec chauffeur.
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

export default Chauffeur;
