import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR LOGO
import logoImg from '../assets/AFRO_LOGOOO.png'; 

// --- ICONS (Reused from Header for consistency) ---
const FbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YtIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
);

const Footer = () => {
  return (
    <footer className="aan-footer">
      <div className="aan-footer-container">
        
        {/* --- SECTION 1: LOGO & BRAND --- */}
        <div className="aan-footer-brand">
          <Link to="/">
            {/* Displaying the logo */}
            <img src={logoImg} alt="AFRO Logo" className="aan-logo-img footer-logo-size" />
          </Link>
          <p className="aan-footer-tagline">
            Connecting Policy, Diplomacy, and Economy across the globe.
          </p>
        </div>

        {/* --- SECTION 2: COMPANY LINKS --- */}
        <div className="aan-footer-links">
          <h4>Company & Legal</h4>
          <Link to="/about">About Us</Link>
          <Link to="/editorial-policy">Editorial Policy</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        {/* --- SECTION 3: SOCIAL MEDIA --- */}
      

      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="aan-footer-bottom">
        <p>&copy; {new Date().getFullYear()} AFRO News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;