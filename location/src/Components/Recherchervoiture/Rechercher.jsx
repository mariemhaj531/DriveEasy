import React from "react";
import bmwm2 from "../../assets/bmwm2.jpg";
import hyndai1 from "../../assets/hyndai1.jpg";
import avenger from "../../assets/avenger.jpg";
import peugeot from "../../assets/peugeot.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Rechercher() {
  const cars = [
    {
      img: bmwm2,
      alt: "BMW M2",
      title: "Profitez de la location de cette nouvelle BMW-M2 avec DriveEasy",
      stars: 4,
      model: "BMW-M2",
      year: 2019,
      price: "250DT",
    },
    {
      img: hyndai1,
      alt: "Hyndai",
      title: "L'agence de location de voitures par excellence ! DriveEasy",
      stars: 3,
      model: "Hyndai",
      year: 2021,
      price: "300DT",
    },
    {
      img: peugeot,
      alt: "Peugeot",
      title: "Votre partenaire de confiance (4.5)",
      stars: 4,
      model: "Peugeot",
      year: 2020,
      price: "100DT",
    },
    {
      img: avenger,
      alt: "Avenger",
      title: "DriveEasy - Découvrir notre voitures",
      stars: 3,
      model: "Avenger",
      year: 2020,
      price: "400DT",
    },
  ];

  // Fonction pour afficher les étoiles
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i key={i} className="fa fa-star" style={{ color: "#f8ce0b" }}></i>);
    }
    return stars;
  };

  return (
    <div className="container my-5">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {cars.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <img
                src={car.img}
                className="d-block w-100"
                alt={car.alt}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3"
                style={{ color: "white", maxWidth: "600px", margin: "auto" }}
              >
                <h5>
                  {car.title} {renderStars(car.stars)}
                </h5>
                <ul className="list-unstyled mt-2">
                  <li>
                    <strong>Modèle:</strong> {car.model}
                  </li>
                  <li>
                    <strong>Année:</strong> {car.year}
                  </li>
                  <li>
                    <strong>Tarif:</strong> {car.price}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}

export default Rechercher;
