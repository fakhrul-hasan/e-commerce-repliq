import React from 'react';
import { FaPhoneAlt, FaPrint, FaRegClock } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-4">
  <div>
    <h4 className="text-2xl font-bold">E-Repliq</h4>
  </div> 
  <div>
    <span className="footer-title">why e-repliq</span> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic corporis dolorem nisi, deserunt doloremque asperiores?</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic corporis dolorem nisi, deserunt doloremque asperiores?</p>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <p>822 Whitewell Street <br />Anchorage, California <br />info@domain.com</p>
    <p className='flex gap-2 items-center'><FaPhoneAlt /> +88 0 101 0000 </p>
    <p className='flex gap-2 items-center'><FaPrint /> +88 0 102 0000</p>
    <p className='flex gap-2 items-center'><FaRegClock /> Mon. - Fri. 8AM - 6PM</p>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;