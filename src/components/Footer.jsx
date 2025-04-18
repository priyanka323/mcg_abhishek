// App.jsx
import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mcg from "./images/mcg.png"
const Footer = () => {
  return (
    <div className=" bg-light text-dark container">
      {/* Navbar */}
     
    

      {/* Footer Section */}
      <footer className="bg-white text-dark py-4 mt-auto border-top">
        <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
            <img src={mcg} alt="Logo" style={{height:'80px', width:"200px"}} className="me-2" />
            
          </div>
          <div className="d-flex gap-3 mb-3 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">Home</a>
            <a href="#" className="text-dark text-decoration-none">Service</a>
            <a href="#" className="text-dark text-decoration-none">Pricing</a>
            <a href="#" className="text-dark text-decoration-none">About</a>
            <a href="#" className="text-dark text-decoration-none">Contact</a>
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-youtube"></i></a>
          </div>

          
        </div>
        <span>© 2024 ViralFlow. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Footer;
