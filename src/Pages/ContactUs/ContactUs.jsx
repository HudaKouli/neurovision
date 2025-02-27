import React, { useState } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import { useEffect } from "react";
import './ContactUs.css';

function ContactUs(){
    return (
        <>
<Navbar/>
<h2 class='header1'>Contact Us</h2>
<div class="footer">
<h2 CLASS="projects_header"></h2>
<div class='trianglebox'>
<form class="my_form">
<div class="row">
<div class="col-25">
<label for="fname">Name</label>
</div>
<div class="col-75">
<input type="text" id="fname" name="name" placeholder="Your name.."/>
</div>
</div>
<div class="row">
<div class="col-25">
<label for="lname">Email</label>
</div>
<div class="col-75">
<input type="email" id="lname" name="Email" placeholder="Your Email.."/>
</div>
</div>
<div class="row">
<div class="col-25">
<label for="country">Number</label>
</div>
<div class="col-75">
<input type="number" id="lname" name="number" placeholder="number.."/>
</div>
</div>
<div class="row">
<div class="col-25">
<label for="subject">Subject</label>
</div>
<div class="col-75">
<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
</div>
</div>
<br/>
<div class="row">
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
