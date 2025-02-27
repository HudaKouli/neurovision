import React, { useState } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import { useEffect } from "react";
import './ContactUs.css';

function ContactUs(){
    return (
        <>
<Navbar/>
<h2 className='header1'>Contact Us</h2>
<div className="footer">
<h2 className="projects_header"></h2>
<div className='trianglebox'>
<form className="my_form">
<div className="row">
<div className="col-25">
<label htmlFor="fname">Name</label>
</div>
<div className="col-75">
<input type="text" id="fname" name="name" className="input-field" placeholder="Your name.."/>
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="lname">Email</label>
</div>
<div className="col-75">
<input type="email" id="lname" name="Email" className="input-field" placeholder="Your Email.."/>
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="country">Number</label>
</div>
<div className="col-75">
<input type="number" id="lname" name="number" className="input-field" placeholder="number.."/>
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="subject">Subject</label>
</div>
<div className="col-75">
<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
</div>
</div>
<br/>
<div className="row">
<input type="submit" value="Submit"/>
</div>
</form>
</div>
</div>
<Footer/>
</>
    );
}

export default ContactUs;
