import React from 'react'
import "./Form.css"
function Form() {
  return (
    <div className="rechpara">
    <div className="rechercher">
        <form method="POST" action="" >
          <label>Date et heure de prise</label>
          <input type="Date" name="Date" placeholder="Date et heure de prise"/>
          <label>Date et heure de retour</label>
          <input  type="Date" name="Date" placeholder="Date et heure de retour"/>
          <label>Lieu</label>
          <input   type="text" name="Lieu" placeholder="Lieu"/>
          <button>Recherchez une voiture</button>
        </form>
        <hr></hr>
        <div className="Paragraphe">
        <p className="para">DriveEasy,agence fondée en 2023</p>
        <p className="para">Assitance 24h/24</p>
        <p className="para">Toujours à votre service</p>
        </div>
    </div>
    </div>
  )
}

export default Form;