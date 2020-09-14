import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/smart-led-logo.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white btn btn-warning" href="tel:+918521169373">BUY LED LIGHTS</a>
                    </li>
                </ul>

                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
