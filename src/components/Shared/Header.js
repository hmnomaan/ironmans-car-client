import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand fw-bolder" to="/"><span className='text-danger '>IronMans</span>CAR</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
<Link className="nav-link active" aria-current="page" to="/">Home</Link>
</li>
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                                </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/cars">Cars</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
        </div>
    );
};

export default Header;

 