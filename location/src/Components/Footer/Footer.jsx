import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
function Footer() {
  return (
    <div className="footer">
      <div className="section-padding">
        <div className="footer-links">
            <div className="fl">
                <h4>Besoin d'une offre?</h4>
                <a href="/"><p>Nos bons plans</p></a>
                <a href="/"><p>Nos Partenaires</p></a>
                <a href="/"><p>Nos voiture de location</p></a>
            </div>
            <div className="fl">
                <h4>Services</h4>
                <a href="/"><p> Location voiture  avec GPS</p></a>
                <a href="/"><p>Location voiture  à domicile</p></a>
                <a href="/"><p>Location voiture  avec chauffeur </p></a>
                <a href="/"><p>Location voiture  automatique</p></a>
            </div>
            <div className="fl">
                <h4>Apropos</h4>
                <a href="/Qui sommes-nous?"><p>Qui sommes-nous?</p></a>
                <a href="/Contactez-nous"><p>Contactez-nous</p></a>
                <a href="/Mentions légales"><p> Mentions légales</p></a>
                <a href="/Politique de confidentialité"><p>Politique de confidentialité</p></a>
            </div>
            <div className="fl">
                <h4>Suivez-nous</h4>
                <div className="socialmedia">
                    <p><img src={facebook} alt="" /></p>
                    <p><img src={instagram} alt="" /></p>
                    <p><img src={twitter} alt="" /></p>
                    <p><img src={linkedin} alt="" /></p>
                </div>
            </div>
        </div>
        <hr></hr>

        <div className="fc">
            <div className="footer-copyright">
                <p>@{new Date().getFullYear()}  DriveEasy.Tous droits réservés.</p>
            </div>  
            <div className="footer-copy-links">
                <a href="/DriveEasy"><div><p>DriveEasy</p></div></a>
                <a href="/Assurance"><div><p>Assurances</p></div></a>
                <a href="/Blog"><div><p>Blog</p></div></a>
                <a href="/Témoignage"><div><p>Témoignages</p></div></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
