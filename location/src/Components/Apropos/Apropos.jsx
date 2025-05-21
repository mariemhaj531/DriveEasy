import React from "react";
//import fond from "../../assets/fond.jpg";
import "./Apropos.css";
function Apropos() {
  return (
    /*<div className="apropos-container">
      
      <div className="text">
         <h1 className="apropos-title">Location Voiture Tunisie</h1>
      <p className="apropos-text">
        DriveEasyTunisie est une agence de location voiture Tunisie depuis 2023,
        assurant un service sérieux et fait la livraison de voitures partout en
        Tunisie. DriveEasy loue des voitures dans les villes telsque : location
        voiture Tunis, Hammamet, Enfidha, Sousse, Nabeul, Bizerte, Zaghouan,
        Tozeur, Sfax, Mahdia, Tabarka, kairoan.. Réservation simple et rapide,
        un devis immédiat. Avec DriveEasy, réservez votre véhicule de location en
        ligne et profitez-en sans délais et sans attente à votre arrivée en
        Tunisie.
      </p>
      <img src={apropos} alt="ap" className="apropos-image " />
      </div>
    </div>*/
    <div id="main">
      <center>
        <h1 className="apropos-title">Location Voiture Tunisie</h1>
      </center>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div
            className=" " 
          >
            <div
              className="col-lg-12  content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 >
                Découvrez DriveEasy : Votre agence de services tout-en-un !
              </h3>
              <p className="fst-italic">
                DriveEasyTunisie est une agence de location voiture Tunisie
                depuis 2023, assurant un service sérieux et fait la livraison de
                voitures partout en Tunisie.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> DriveEasy loue des
                  voitures dans les villes telsque : location voiture Tunis,
                  Hammamet, Enfidha, Sousse, Nabeul, Bizerte, Zaghouan, Tozeur,
                  Sfax, Mahdia, Tabarka, kairoan.. Réservation simple et rapide,
                  un devis immédiat.{" "}
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Nos promotions sont
                  disponibles partout tous les mois et en tant que client
                  fidèle, vous bénéficiez d'une réduction de 50%.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Notre service est
                  pour toi, comme un GPS, un chauffeur, des sièges pour enfants
                  et de nombreuses promotions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apropos;
