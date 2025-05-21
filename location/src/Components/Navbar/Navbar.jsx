// src/Navbar/Navbar.jsx
import React from "react";
import { NavData } from "./NavData";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        {NavData.map((item, index) => (
          <li key={index} className={item.cName}>
            <a href={item.url}>
              <i className={item.icon}></i> {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
