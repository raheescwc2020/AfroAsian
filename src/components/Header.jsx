import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR LOGO
import logoImg from '../assets/AFRO_LOGOOO.png'; 

// --- ICONS ---
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const FbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YtIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="aan-masthead-wrapper">
      
      {/* --- PANEL 1: LOGO (Black Background) --- */}
      <div className="aan-logo-panel">
        <div className="aan-container centered-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logoImg} alt="AFRO Logo" className="aan-logo-img" />
          </Link>
        </div>
      </div>

      {/* --- PANEL 2: NAVIGATION (White Background) --- */}
      <div className="aan-nav-panel">
        <div className="aan-container nav-flex-wrapper">
          
          {/* A. MOBILE MENU TOGGLE (Left) */}
          <button 
            className="aan-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'} 
          </button>

          {/* B. NAVIGATION LINKS (Center) */}
          <nav className={`aan-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
             
             {/* Mobile-Only Search inside Drawer */}
             <div className="mobile-only mobile-search-container">
               <input type="text" placeholder="Search..." />
               <button><SearchIcon /></button>
             </div>

             {/* Links */}
              <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
             <Link to="/policy" className="nav-item" onClick={closeMenu}>Policy</Link>
             <Link to="/diplomacy" className="nav-item" onClick={closeMenu}>Diplomacy</Link>
             <Link to="/economy" className="nav-item" onClick={closeMenu}>Economy</Link>
             <Link to="/opinion" className="nav-item" onClick={closeMenu}>Opinion</Link>
             <Link to="/events" className="nav-item" onClick={closeMenu}>Events</Link>
             
             {/* Mobile Socials */}
             <div className="mobile-only mobile-socials">
                <a href="https://facebook.com"><FbIcon /></a>
                <a href="https://instagram.com"><InstaIcon /></a>
                <a href="https://youtube.com"><YtIcon /></a>
             </div>
          </nav>

          {/* C. DESKTOP SEARCH BOX (Right Side) */}
          <div className="aan-search-wrapper">
            <div className="aan-mini-search">
              <input type="text" placeholder="Search" />
              <button><SearchIcon /></button>
            </div>
          </div>
          
          {/* D. MOBILE SEARCH TOGGLE (Right Side) */}
          <button className="aan-mobile-search-toggle">
             <SearchIcon />
          </button>

        </div>
      </div>

    </header>
  );
};

export default Header;