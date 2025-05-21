import React from 'react';
import Navbar from "../Navbar/Navbar";
import  Rechercher from "../Recherchervoiture/Rechercher"
//import Form from "../Recherchervoiture/Form"
import Apropos from "../Apropos/Apropos"
import OffreSpeciale from "../OffreSpeciale/Offre"
import VoituresPopulaires from "../VoituresPopulaires/Voiturepop"
import Avis from "../Avis/Avis"
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer"
import "./Home.css"
function Home() {
  console.log("Navbar:", Navbar);
  console.log("Rechercher:", Rechercher);
  console.log("Apropos:", Apropos);
  console.log("OffreSpeciale:", OffreSpeciale);
  console.log("VoituresPopulaires:", VoituresPopulaires);
  console.log("Avis:", Avis);
  console.log("Contact:", Contact);
  console.log("Footer:", Footer);
  return (
    <> 
    <Navbar />
    <Rechercher /> 
    <Apropos />
    <OffreSpeciale />
    <VoituresPopulaires />
    <Avis />
    <Contact />
    <Footer />
    </>
  )
}
export default Home
