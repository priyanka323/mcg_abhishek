import React from "react";
import "./Pricing.css";
import mcg1 from "./images/mcg1.jpeg"
const Pricing = () => {
  return (
    <div className="pricing-section">
      {/* <h1 className="section-title">Our Pricing Plans</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2 className="plan-title">Basic</h2>
          <p className="plan-price">$9/month</p>
          <ul className="plan-features">
            <li>10 projects</li>
            <li>5 GB Storage</li>
            <li>Email Support</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>

        <div className="pricing-card popular">
          <h2 className="plan-title">Pro</h2>
          <p className="plan-price">$29/month</p>
          <ul className="plan-features">
            <li>Unlimited projects</li>
            <li>50 GB Storage</li>
            <li>Priority Support</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Enterprise</h2>
          <p className="plan-price">$99/month</p>
          <ul className="plan-features">
            <li>Custom solutions</li>
            <li>Unlimited Storage</li>
            <li>Dedicated Support</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>
      </div> */}


      {/* ---------------------------- */}
      <div className="container">
      <div className="header">
        <h1>Med-Creators Guide</h1>
        <p>Learn how to make vids, and money from content</p>
        <div className="price">$247 <small>/one time</small></div>
      </div>
{/* 
      <div className="image-center">
        <img src="https://via.placeholder.com/500x250" alt="Centered Main Display" />
      </div> */}

      <div className="content">
        <div className="modules">
          <h4>Modules</h4>

          <div className="module-section">
            <h5>VIDEO CREATION</h5>
            <ul>
              <li>Viral Ideation 101</li>
              <li>Viral Scripting 101</li>
              <li>Viral Recording 101</li>
              <li>Viral Flow Video Templates Breakdown</li>
            </ul>
          </div>

          <div className="module-section">
            <h5>PROFIT FLOWS</h5>
            <ul>
              <li>Profitable CTAS</li>
              <li>Manychat Introduction</li>
              <li>Manychat Flow Templates</li>
            </ul>
          </div>

          <div className="module-section">
            <h5>PROFIT FLOWS</h5>
            <ul>
              <li>Advanced Scripting Modules</li>
              <li>Viral Manychat Video Breakdowns</li>
            </ul>
          </div>
        </div>

        <div className="bonus-cards">
          <div className="card">
            <p><strong>Viral Flow Software</strong></p>
            <img src={mcg1} style={{ width: "150px", height: "100px" }} alt="Software Screenshot" />
          </div>
          <div className="card">
            <p className="bonus"> Viral Flow Community</p>
            <img src={mcg1} style={{ width: "150px", height: "100px" }} alt="Community Screenshot" />
          </div>
          <div className="card">
            <p><strong>Advanced Scripting Modules</strong></p>
            <img src={mcg1} style={{ width: "150px", height: "100px" }} alt="Advanced Scripting" />
          </div>
          <div className="card">
            <p className="bonus"> Viral Manychat Video Breakdowns</p>
            <img src={mcg1} style={{ width: "150px", height: "100px" }} alt="Breakdowns" />
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="signup-btn">SIGN UP • $247</button>
      </div>
    </div>

    {/* --------------------------------------------------- */}
    </div>
  );
};

export default Pricing;
