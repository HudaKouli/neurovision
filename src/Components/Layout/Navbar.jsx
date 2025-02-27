import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import neuro from "../Images/neuro.png"; // Uncomment this line

function Navbar() {
    const token = window.localStorage.getItem("token");

    return (
        <>
        <nav className="navbar">
            <div className="navigation__left">
                <img src={neuro} alt="logo" className="logo" /> {/* Neuro image on the left */}
                </div>
            <div className="navigation__right">  
                <Link to="/">
                    <span className="nav-item">Home</span>
                </Link>
                <Link to="/Blog">
                    <span className="nav-item">Blog</span>
                </Link>
                <Link to="/Community">
                    <span className="nav-item">Community</span>
                </Link>
                <Link to="/ContactUs">
                    <span className="nav-item">Contact Us</span>
                </Link>
                {!token ? (
                    <Link to="/SignupPage">
                        <button className="signup-button">Register</button>
                    </Link>
                ) : (
                    <Link to="/AccountPage">
                        <span className="nav-item">Account</span>
                    </Link>
                )}
            </div>
        </nav>
        </>
    );
}

export default Navbar;
