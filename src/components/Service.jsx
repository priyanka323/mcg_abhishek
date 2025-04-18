// App.jsx
import React from 'react';
import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import abhi from "./images/abhishek.jpeg"
const Service = () => {
  return (
  <div>
      <div className="main-wrapper bg-light text-dark min-vh-100">
      {/* Video Training Section */}
      <div className="  text-center py-5">
        <h1 className="fw-bold display-5">
          You Get A Proven Step-By-Step System To <br />
          Engineer Your First <span className="text-danger">Viral Video.</span>
        </h1>
        <p className="lead mt-3">
          In just a few weeks you’ll learn how to <span className="highlight-red">ideate, script and record viral videos.</span>
        </p>

        {/* Overlapping Circles */}
        <div className="d-flex justify-content-center align-items-center vh-50">
  <div className="venn-wrapper d-flex flex-column align-items-center text-center">
    <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '300px', height: '200px' }}>
      <div className="circle left-circle position-absolute d-flex align-items-center justify-content-center" style={{ left: -40 }}>Predictable Content</div>
      <div className="circle right-circle position-absolute d-flex align-items-center justify-content-center" style={{ right: -40 }}>Automated Profit</div>
      <div className="circle center-logo position-absolute d-flex align-items-center justify-content-center" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <span className="logo-icon">MCG</span>
      </div>
    </div>
  </div>
</div>

        <h2 className="fw-bold mt-5 mb-4">Predictable Content<span className="text-danger">.</span></h2>

        {/* Cards Section */}
        <div className=" row justify-content-center">
          {[
            {
              title: "Viral Ideation",
              img: {abhi},
              desc: "Learn how to generate unlimited viral content ideas effortlessly and never search for inspiration again."
            },
            {
              title: "Viral Scripting",
              img: {abhi},
              desc: "Learn Devin’s proven 4-step formula for scripting viral videos — tested on 1000s of videos."
            },
            {
              title: "Viral Recording",
              img: {abhi},
              desc: "Learn how to record videos confidently that turn viewers into fans and buyers."
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-dark text-white h-100 shadow-sm">
                <img src={abhi} className="card-img-top" alt={item.title} style={{height:"300px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-danger btn-lg mt-4">BUY NOW • $247</button>
      </div>
    </div>

<div className=" text-center py-5">
<h1 className="fw-bold mb-4">Automated <span className="text-danger">Profit.</span></h1>
<div className="row g-4 justify-content-center">
  <div className="col-md-4">
    <div className="card bg-white h-100 shadow-sm">
      <img src={abhi} className="card-img-top" alt="Profitable Call-To-Actions" style={{height:"300px"}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">Profitable Call-To-Actions</h5>
        <p className="card-text">Learn how to generate unlimited viral content ideas effortlessly and never search for inspiration again.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card bg-white h-100 shadow-sm">
      <img src={abhi} className="card-img-top" alt="Manychat Introduction" style={{height:"300px"}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">Manychat Introduction</h5>
        <p className="card-text">Learn Devin's proven 4-step formula for scripting viral videos — tested on 1000s of videos.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card bg-white h-100 shadow-sm">
      <img src={abhi} className="card-img-top" alt="Manychat Copy & Paste Flows" style={{height:"300px"}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">Manychat Copy & Paste Flows</h5>
        <p className="card-text">Learn how to generate unlimited viral content ideas effortlessly and never search for inspiration again.</p>
      </div>
    </div>
  </div>
</div>
<button className="btn btn-danger btn-lg mt-4">BUY NOW • $247</button>
</div>
  </div>

  );
};

export default Service;
