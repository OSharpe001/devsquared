import React from 'react'
import { Link } from "react-router-dom";


export default function Footer() {

  return (
    <footer>
      <p>Dev^2© • Dev Squared© • 2023</p>
      <nav>
        <Link className="nav-item button" aria-label="On Click" target="_blank" to="https://osharpesportfolio.netlify.app" >O. Sharpe's Portfolio</Link>
      </nav>
    </footer>
  );
};