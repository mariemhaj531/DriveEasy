import React from 'react';
import "./Voiturepop.css"
import "bootstrap/dist/css/bootstrap.min.css";
import renault from "../../assets/renault.jpeg"
import toyotaagya from "../../assets/toyataagya.jpeg"
import kiapicanto from "../../assets/kiapicanto.jpeg"
import Mahindra   from "../../assets/Mahindra.jpeg"
import { Link } from "react-router-dom";
//import peugeot208 from "../../assets/peugeot 208.jpeg"
/*import suzuki from "../../assets/suzuki.jpeg"
import mitsubishi from "../../assets/mitsubichi.jpeg"
import hyundai from "../../assets/hyundai.jpeg"*/
function Voiturepop() {
  return (
    <div className="">
      <div className="plane">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <h2>Nos promotions sur les voitures populaires</h2>
                <span>Chez DriveEasy vous trouvez le meilleur bon plan de location de voiture pas cher en Tunisie</span>
              </div>
            </div>
          </div>
          <div className="scrollable-container">
          <div className="row">
            <div className="col-md-3">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={renault} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>Renault 4</h3>
                  <p>
                    A partir de 165 DT/jour 
                  </p>   
                  <Link to="/Reserver">        
                    <button type="button" className="reserver">
                      Réservez maintenant
                    </button>
                 </Link> 
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={toyotaagya} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>Toyota Agya</h3>
                  <p>
                  A partir de 150 DT/jour 
                  </p>
                  <Link to="/Reserver">
                    <button type="button" className="reserver">
                    Réservez maintenant
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={kiapicanto} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3> Kia Picanto </h3>
                  <p>
                  A partir de 290 DT/jour 
                  </p>
                  <Link to="/Reserver">
                    <button type="button" className="reserver">
                    Réservez maintenant
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src={Mahindra} alt="/" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3> Mahindra </h3>
                  <p>
                  A partir de 130 DT/jour 
                  </p>
                  <Link to="/Reserver">
                    <button type="button" className="reserver">
                    Réservez maintenant
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        
      
  
  )
}

export default Voiturepop;