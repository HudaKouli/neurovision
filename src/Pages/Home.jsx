import React, { useState, useEffect } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import './Home.css';
import image1 from '../../src/Components/Images/1.png'; 
import image2 from '../../src/Components/Images/2.png';
import image3 from '../../src/Components/Images/3.png';
import image4 from '../../src/Components/Images/brain.png';

import icons from '../../src/Components/Images/icons.png';

function Homepage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        };

        checkLoginStatus();
        
        window.addEventListener('storage', checkLoginStatus);
        
        return () => window.removeEventListener('storage', checkLoginStatus);
    }, []);

    return (
        <div className="container2">
            <Navbar />
            <div className='rectangle'>
        
                <div>
                <img src={image4} alt="Image 1" className="photo1" />

                    <h2 className='first-h'>The Smart Future of Cancer Diagnosis and Physician Support</h2>
                    <h5 className='second-h'>Neurovision powered by AI for accurate tumor diagnosis</h5>
                    <h4 className='second-h1    '> featuring a scientific blog where doctors and researchers can share studies and the latest advancements in cancer treatment.</h4>
                    <div className="buttons-container">
                        <a href="https://huggingface.co/spaces/malani002/NeuroVision" target="_blank" rel="noopener noreferrer" className="third-h">
                            Start Now
                        </a>
                    </div>

                </div>

            </div>
            <button className="photo-btn">Test Images Examples</button>
            

<div className="images-container">
    <img src={image1} alt="Image 1" className="photo" />
    <img src={image2} alt="Image 2" className="photo" />
    <img src={image3} alt="Image 3" className="photo" />
</div>

            <img src={icons} alt="icons" className="photo3" />



            
            <Footer />
        </div>
        
    );
}
export default Homepage;
