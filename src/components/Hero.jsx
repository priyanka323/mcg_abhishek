import React from 'react';
import './Hero.css';
import mcg from "./images/mcg.png"
import mcg3 from "./images/mcg3.jpg"


export default function Hero() {
  return (
    <div>
            <div className=" bg-light text-dark  ">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 shadow-sm">
        <a className="navbar-brand" href="#">
          <img src={mcg} alt="Logo" className="me-2" style={{height:'80px', width:"200px"}} /> 
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="\mcg">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\home\service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\home\price">Pricing</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="\home\about">About</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="\home\contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    

    
    </div>
   
 <div className="position-relative text-black text-center" style={{ height: '400px' }}>
        <img 
          src={mcg3}
          alt="Hero" 
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
          style={{ filter: 'blur(4px)', objectFit: 'cover' }} 
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h2 className="display-5">Elevate Your Medical Content</h2>
          <p className="lead">Crafting engaging, accurate and impactful content for healthcare brands</p>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className=" text-center py-5">
        <h1 className="fw-bold mb-3">Predictable Content, <span className="text-danger">Automated Profit.</span></h1>
        <p className="mb-4">Learn how to create your <strong className="bg-danger text-white px-1">first viral video</strong> and then we show you how to turn it into an automated <strong className="bg-danger text-white px-1">sales machine</strong>.</p>
        <button className="btn btn-danger btn-lg mb-4">BUY NOW • $247</button>
        <div className="video-wrapper bg-white p-3 rounded shadow mx-auto" style={{ maxWidth: '800px' }}>
          <iframe 
            width="100%" 
            height="450" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    

      

    </div>

   

  );
}
