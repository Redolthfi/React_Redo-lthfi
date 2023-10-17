import React from 'react';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const LandingPages = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName.trim() === '') {
      setError('First Name harus diisi');
    } else if (formData.lastName.trim() === '') {
      setError('Last Name harus diisi');
    } else if (formData.email.trim() === '') {
      setError('Email harus diisi');
    } else if (formData.message.trim() === '') {
      setError('Message harus diisi');
    } else {
      setError('');
      alert(`
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Message: ${formData.message}
      `);
    }
  }
  return (
    <div className="custom-bg">
      <nav className="navbar sticky-top" style={{ backgroundColor: '#213555' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/codeCompetance2/Assets/WB.png" alt="Logo" width="60" height="48" className="align-items-center" />
            <div className="d-inline-block text-light text-center">White Beard's</div>
          </a>
          <ul className="nav justify-content-end list" style={{ marginRight: '50px' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="section-1">
        <div className="container text text-center fw-bold" style={{ height: '100%' }}>
          <h1 style={{ marginTop: '10rem' }}>WELCOME TO OUR NAKAMA</h1>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci.</p>
          <button type="button" className="btn fw-medium rounded-5" style={{ backgroundColor: '#213555', color: 'white', marginBottom: '300px' }}>Check It Now</button>
        </div>
      </section>
      <section className="section2">
        <div className="container text-center">
          <div className="row align-items-start justify-content-center">
            <div className="col">
              <h1>Contact Us</h1>
              <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corrupti saepe adipisci dicta reprehenderit labore temporibus esse! Amet, maxime! Maxime quisquam quod dolor placeat doloribus saepe est perspiciatis necessitatibus neque?</p>
            </div>
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label htmlFor="fname" className="text-user">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      id="fname"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="lname" className="text-user">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      id="lname"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-user mt-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-user">
                    What can we help you?
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {error && <div className="text-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn fw-medium rounded-3 mb-5"
                  style={{ backgroundColor: '#213555', color: 'white' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="c-vh" style={{ backgroundColor: '#213555' }}>
        <div className="container text-center pt-5">
          <div className="row">
            <div className="col">
              <h1 className="fs-4 text-light">SOSIAL MEDIA</h1>
              <div className="container">
                <a href="">
                  <img src="/codeCompetance2/Assets/igico.png" alt="" width="10%" className="m-2" />
                </a>
                <a href="">
                  <img src="/codeCompetance2/Assets/fbico.png" alt="" width="10%" className="m-2" />
                </a>
                <a href="">
                  <img src="/codeCompetance2/Assets/twtico.png" alt="" width="10%" className="m-2" />
                </a>
              </div>
            </div>
            <div className="col text-light d-flex">
              <a href="" className="text-start m-2">
                <img src="/codeCompetance2/Assets/WB.png" alt="" width="100%" />
              </a>
              <div className="col text-start">
                <h3 className="d-flex">White Beard's Community</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nam!</p>
              </div>
            </div>
            <div className="col text-light justify-content-end">
              <h4>Come Say Hello!</h4>
              <p className="text-break">AB1375,Yogyakarta,Celeban Umbulahrjo,Lasvegas river side</p>
              <p className="text-danger">(0895366116361)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPages;
