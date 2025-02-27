import React, { useState } from "react";
import Navbar from "../../src/Components/Layout/Navbar";
import Footer from "../../src/Components/Layout/Footer";
import { useEffect } from "react";
import './Blog.css';

function BlogPage(){

return(
<>
<Navbar/>
<h3 className="sub-header">Accurate information at your fingertips</h3>
<div className="d_flex">
    <div class="container">
        <img class="image" src="https://th.bing.com/th/id/OIP.wYFLoN5NYTIJoLSZDgAJkAHaFj?rs=1&pid=ImgDetMain"/>
        <h2>Artificial Intelligence in Cancer Diagnosis</h2>
        <p>Discover deep learning and AI techniques</p>
        <div class="bottom">
        <p class='dr'>Dr:Ahmad Mohammad</p>
        <btn class="btn">Read more</btn> 
        </div>
      
    </div>
    <div class="container">
        <img class = "image" src="https://th.bing.com/th/id/OIP.RofX9iJX6vHNtQ06th5sGgHaE8?rs=1&pid=ImgDetMain"/>
        <h2>Revolution in Modern Medicine using AI</h2>
        <p>What are the latest developments in this field?</p>
        <div class="bottom">
        <p class="dr">Dr: Omar Shak</p>
        <btn class="btn">Read more</btn>  
        </div>
   
    </div>
    <div class="container">
        <img class = "image" src="https://th.bing.com/th/id/OIP.COGONxMqZgBND-JsTb7YowHaEb?rs=1&pid=ImgDetMain " alt="apple"/>
        <h2>Modern Imaging Techniques for Tumor Detection</h2>
        <p>From MRI to AI-powered imaging techniques, explore.</p>
        <div class="bottom">
        <p class="dr">Dr:samer abo Shaar</p>
        <btn class="btn">Read more</btn>    
        </div>
 
    </div>
</div>
<Footer/>
</>    
    );
}

export default BlogPage;
