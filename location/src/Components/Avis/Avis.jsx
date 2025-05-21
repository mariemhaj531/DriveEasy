import React from "react";
import { Row, Col } from "reactstrap";
import "./Avis.css";
import ahmedhaj from "../../assets/ahmedhaj.jpg";
import houssemhaj from "../../assets/houssemhaj.jpg";
import sanach from "../../assets/sanach.jpg";
function Avis() {
  return (
    <section className="section2">
      <>
        <Row>
          <Col lg="10" className="m-auto">
            <h2 className="mb-4"> Avis Clients</h2>
            <div className="displine">
              <div className="avis">
                <Row>
                  <Col lg="6">
                    <div className="testimonail_img  ">
                      <img src={ahmedhaj} alt="ss" className="w-100" />
                    </div>
                  </Col>
                  <Col>
                    <div className="single_testimonial ">
                    <h6 className="fw-bold">Ahmed Hajji</h6>
                      <p>
                      «Driveasy est mon choix incontournablepourla location
                        de voitures!Fonctionnalités pratiques,communication
                        efficace de l'équipe,et tranquillité d'esprit assurée.
                        Recommandé!»
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col lg="6">
                    <div className="testimonail_img  ">
                      <img src={houssemhaj} alt="ss" className="w-100" />
                    </div>
                  </Col>
                  <Col>
                    <div className="single_testimonial ">
                    <h6 className="fw-bold">Houssem Hajji </h6><p>
                        " Driveasy est incroyable ! Leur application facilite la
                        location de voitures. Large sélection de véhicules
                        et excellente communication avec leur
                        équipe.
                        "
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col lg="6">
                    <div className="testimonail_img  ">
                      <img src={sanach} alt="ss" className="w-100" />
                    </div>
                  </Col>
                  <Col>
                    <div className="single_testimonial ">
                    <h6 className="fw-bold"> Sana Cherif</h6>
                      <p>
                        « Je suis Sana Cherif et je viens deKram.J'adore
                        Driveasy !L'application est super pratique et la
                        communication avec leur équipe est excellente.Je
                        recommande à100%! »
                      </p>  
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </>
    </section>
  );
}

export default Avis;
