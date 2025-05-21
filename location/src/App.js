import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NosVoitures from "./Components/Catalogue de voiture/NosVoitures"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Accueil from "./Components/Accueil/Accueil";
import Apropos from "./Components/Apropos/Apropos";
import Contact from "./Components/Contact/Contact";
import Offre from "./Components/OffreSpeciale/Offre";
import Gps from "./Components/OffreSpeciale/Gps";
import Chauffeur from "./Components/OffreSpeciale/Chauffeur";
import Siege from "./Components/OffreSpeciale/Siege";
import Voiturepop from "./Components/VoituresPopulaires/Voiturepop";
import Reserver from "./Components/VoituresPopulaires/Reserver";
import ReservationDetails from "./Components/Catalogue de voiture/ReservationDetails";
import Navbar  from "./Components/Navbar/Navbar"

import LogOut from "./Components/Connexion/LogOut";

import LogIn from "./Components/Connexion/LogIn";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App"> 
   
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Accueil />} />
          <Route index element={<Home />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="nosvoitures" element={<NosVoitures />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
      </Routes> 
      <Routes>
        <Route path="/Offre" element={<Offre />} />
        <Route path="Gps" element={<Gps />} />
        <Route path="Chauffeur" element={<Chauffeur />} />
        <Route path="Siege" element={<Siege />} />
      </Routes>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/nosvoitures" element={<NosVoitures />} />
        <Route path="LogOut"  element={<LogOut /> }/>
        <Route path="reservation" element={<ReservationDetails />} />
        <Route />
      </Routes>  
      <Routes>
        <Route path="/Voiturepop" element={<Voiturepop />} />
        <Route path="Reserver" element={<Reserver />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
