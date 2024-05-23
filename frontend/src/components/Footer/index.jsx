import React, {useState} from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './index.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section about">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing high-quality online education to learners around the globe. Our platform offers a wide range of courses to help you gain new skills and advance your career.</p>
                </div>
                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul >
                        <Link className= "li" to={`/`}>Home</Link><br/>
                        <Link className= "li" to={`/courses`}>Courses</Link><br/>
                        <Link className= "li" to={`/login`}>Login</Link><br/>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 E-Learning St, Edutown, EDU 12345</p>
                    <p><i class="fas fa-phone"></i> +1 234 567 890</p>
                    <p><i class="fas fa-envelope"></i> support@elearning.com</p>
                </div>
                <div class="footer-section social">
                <h3>Follow Us</h3>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 E-Learning Platform. All Rights Reserved.</p>
            </div>
        </footer>

    )

}

export default Footer;