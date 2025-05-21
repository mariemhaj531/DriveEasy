import React from "react";
import "./NosVoitures.css"
import "bootstrap/dist/css/bootstrap.min.css";
import toyota from "../../assets/toyota.jpeg";
import tesla from "../../assets/tesla.jpeg";
import honda from "../../assets/honda.jpeg";
import bmw from "../../assets/bmw.jpeg";
import peugeot from "../../assets/peugeot.jpeg";
import lexus from "../../assets/lexus.jpeg";
import volkswagen from "../../assets/volkswagen.jpeg";
import volvo from "../../assets/volvo.jpeg";
import kia from "../../assets/kia.jpeg"
import { Link } from "react-router-dom";
//import ReservationDetails from "./ReservationDetails";
const carData = [
  {
    id: 1,
    image: toyota,
    marque: "Toyota",
    modele: "<Tundra>",
    annee: 2022,
    description:
         "Répondre aux besoins des conducteurs qui recherchent une puissance de remorquage élevée, une capacité de chargement généreuse et une conduite confortable aussi bien sur les routes que sur les terrains difficiles......",
    tariffs: "105DT",
    climatiseur: "oui",
  },
  {
    id: 2,
    image: honda,
    marque: "Honda",
    modele: "<Civic>",
    annee: 2022,
    description:
      "La Honda Civic 2022 incarne équilibre parfait entre style, performance et praticité. Avec son design extérieur élégant et dynamique, la nouvelle Civic attire lattention avec des lignes fluides et des détails bien travaillés",
    tariffs: "120Dt",
    Climatiseur: "oui",
  },
  {
    id: 3,
    image: bmw,
    marque: "BMW",
    modele: "<Series 5>",
    annee: 2021,
    description:
      "Une berline haut de gamme conçue pour offrir une expérience de conduite de premier ordre. Avec son design extérieur élégant et sportif, la Série 5 arbore une allure puissante et distinctive, avec des lignes fluides....",
    tariffs: "180Dt",
    Climatiseur: "Oui",
  },
  {
    id: 4,
    image: volkswagen,
    marque: "Volkswagen",
    modele: "<Golf>",
    annee: 2020,
    description:
      "Offre un espace confortable pour les passagers et une habitabilité très pratique.......",
    tariffs: "130Dt",
    Climatiseur: "non",
  },
  {
    id: 5,
    image: tesla,
    marque: "Tesla",
    modele: "<Model Y>",
    annee: 2022,
    description:
      " un SUV électrique de taille moyenne conçu par Tesla, offrir une conduite électrique écoénergétique.",
    tariffs: "90Dt",
    Climatiseur: "Non",
  },
  {
    id: 6,
    image: kia,
    marque: "Kia",
    modele: "<Sportage>",
    annee: 2021,
    description:
      "Le Kia Sportage 2021 offre une gamme de caractéristiques de sécurité active et passive.",
    tariffs: "190Dt",
    Climatiseur: "oui",
  },
  {
    id: 7,
    image: volvo,
    marque: "Volvo",
    modele: "<S90>",
    annee: 2020,
    description:
      "Une berline spacieuse et sophistiquée qui se distingue par son design élégant et épuré. Avec ses lignes équilibrées et sa calandre distinctive, la S90 présente une apparence à la fois moderne.",
    tariffs: "100Dt",
    Climatiseur: "oui",
  },
  {
    id: 8,
    image: peugeot,
    marque: "Peugeot",
    modele: "<208>",
    annee: 2022,
    description:
      "Une citadine compacte au design dynamique et contemporain. Avec ses lignes audacieuses et son allure sportive, la 208 attire lattention sur la route avec son style distinctif et sa calandre emblématique.",
    tariffs: "100Dt",
    Climatiseur: "non",
  },
  {
    id: 9,
    image: lexus,
    marque: "Lexus",
    modele: "<LX>",
    annee: 2021,
    description:
      "Un SUV de grande taille conçu pour offrir une expérience de conduite luxueuse et raffinée, tant sur les routes pavées que sur les terrains difficiles. Avec son design extérieur imposant et élégant.",
    tariffs: "150Dt",
    Climatiseur: "non",
  },
];
function NosVoitures() {
  return (
    /* <div className="car-catalog">{carData.map((car)=>(<div key={car.id} className="car-item"> <img src={car.image} alt={car.marque} /> <h2>{car.marque}</h2> <h3>{car.modele}</h3> <p>Année: {car.annee}</p> <p>Description: {car.description}</p> <p> Tarifs: {car.tariffs}</p> <button>Réserver</button></div>))}</div>*/
    <div className="container mt-4">
      <h1 className="text-center mb-4">Catalogue de Voitures</h1>
      <div className="row">
        {carData.map((car) => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={car.image}
                alt={car.marque}
                className="card-img-top car-image"
              />
              <div className="card-body">
                <h2 className="card-title car-model-title">{car.marque}</h2>
                <h3 className="card-subtitle mb-2 text-muted car-model-subtitle">
                  {car.modele}
                </h3>
                <p className="card-text">
                  <strong>
                    <i>Description</i>
                  </strong>
                  : {car.description}
                </p>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    <strong>Année:</strong> {car.annee}
                  </p>
                  <p className="card-text">
                    <strong>Tarifs:</strong> {car.tariffs}{" "}
                  </p>
                  <p className="card-text">
                    <strong>Climatiseur:</strong>{" "}
                    {car.climatiseur === "oui" ? "Oui" : "Non"}
                  </p>
                </div>
                <Link
                  to={{
                    pathname: "/reservation",
                    state: { reservationDetails: car },
                  }}
                >
                <button className="btn btn-primary btn-block">
                    Réserver Maintenant 
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NosVoitures;
