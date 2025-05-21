import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Accueil() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/NosVoitures">NosVoitures</Link>
        </li>
        <li>
          <Link to="/Apropos">Apropos</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/LogOut">Register</Link>
        </li>
        <li>
          <Link to="/LogIn">Login</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default Accueil