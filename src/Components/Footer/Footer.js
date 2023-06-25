import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background:`url(${require("../../images/footer-bg.png")})`,
            backgroundSize:"cover"
        }} className='m-10'> 
        <div className='footer'>
        <div>
            <span className="footer-title text-secondary">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </div>
        <div>
            <span className="footer-title text-secondary">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </div>
        <div>
            <span className="footer-title text-secondary">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </div>
    </div>
    <div className='mt-40 text-center'>
        <p>Copyright © 2023 doctors-portal.com</p>
    </div>
        </footer>
       
    );
};

export default Footer;