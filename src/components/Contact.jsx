// App.jsx
import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="main-wrapper bg-light text-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
      

      {/* Existing sections omitted for brevity */}

      {/* Contact Section */}
      <div id="contact" className="container py-5">
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>
        <form action="http://localhost:5000/send" method="POST" className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Comment</label>
            <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-danger">Submit</button>
        </form>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default Contact;
