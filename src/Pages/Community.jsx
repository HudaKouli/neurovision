import React from "react";
import Navbar from "../../src/Components/Layout/Navbar";
import Footer from "../../src/Components/Layout/Footer";
import './Community.css';
import image_community from '../Components/Images/community.png';

function CommunityPage() {
    return (
        <div>
            <Navbar />
            <h3 className="sub-header">Community</h3>
            <img src={image_community} alt="Community" className="com_image" />
            <Footer />
        </div>
    );
}

export default CommunityPage;