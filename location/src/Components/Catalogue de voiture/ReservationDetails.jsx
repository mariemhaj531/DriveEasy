import React, { useState } from "react";
import "./ReservationDetails.css";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function ReservationDetails(props) {
  //const { reservationDetails } = props.location.state;
  const [details, setDetails] = useState({
    nom: "",
    prenom: "",
    dateDepart: "",
    dateRetour: "",
    marque: "",
    tarif: "",
    assurance: false,
    gps: false,
    lieu: "",
    numeroReservation: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    const message =
      "Vous avez réservé avec succès! Juste appeler ce numéro pour récupérer la voiture louée : +21651202143";
    alert(message);
  };

  return (
    <div className="reservation-container">
      <h2 className="animate__animated animate__bounceIn">
        {" "}
        Détails de réservation
      </h2>
      <form
        className="reservation-form animate__animated animate__fadeIn "
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Nom:</label>
          <input
            type="text"
            name="nom"
            value={details.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Prénom:</label>
          <input
            type="text"
            name="prenom"
            value={details.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de départ:</label>
          <input
            type="date"
            name="dateDepart"
            value={details.dateDepart}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de retour:</label>
          <input
            type="date"
            name="dateRetour"
            value={details.dateRetour}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Marque:</label>
          <input
            type="text"
            name="marque"
            value={details.marque}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tarifs:</label>
          <input
            type="text"
            name="tarif"
            value={details.tarif}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label>Assurance:</label>
          <input
            type="checkbox"
            name="assurance"
            checked={details.assurance}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label>GPS:</label>
          <input
            type="checkbox"
            name="gps"
            checked={details.gps}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label>Siéged'enfant:</label>
          <input
            type="checkbox"
            name="gps"
            checked={details.gps}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Lieu:</label>
          <input
            type="text"
            name="lieu"
            value={details.lieu}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Numéro de réservation:</label>
          <input
            type="number"
            name="numeroReservation"
            value={details.numeroReservation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buttons-container">
          <Link to="/Historique">
          <button
            type="button"
            className="btn btn-success animate__animated animate__bounceInLeft"
          >
            Historique
          </button>
          </Link>
          <Link to="/nosvoitures">
          <button
            type="button"
            className="btn btn-danger animate__animated animate__bounceInLeft"
          >
            Annuler
          </button>
            </Link>
            <Link to="/">
          <button
            type="button"
            className="btn btn-warning animate__animated animate__bounceInLeft"
          >
            Modifier
          </button>
          </Link>
          <Link to="/">
          <button
            type="submit"
            className="btn btn-primary animate__animated animate__bounceInRight"
            onClick={handleSubmit}
          >
           Confirmer
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ReservationDetails;
