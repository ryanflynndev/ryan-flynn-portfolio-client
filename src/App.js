import React from 'react'
import './css/style.css'
import logo from './images/portfolio-logo.png'

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-box">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="title-of-site">
          Ryan Flynn | Full-Stack Engineer
        </div>
      </div>
    </div>
  );
}

export default App;
