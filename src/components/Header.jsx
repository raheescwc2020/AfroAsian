import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <header className="aan-masthead">
      <div className="aan-masthead-inner">
        
        {/* 1. MOBILE MENU TOGGLE */}
        <button 
          className="aan-menu-toggle" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'} 
        </button>

        {/* 2. LOGO */}
        <div className="aan-logo">
          <Link to="/" onClick={closeMenu}>AAN</Link>
        </div>
        
        {/* 3. NAVIGATION (Desktop & Mobile Wrapper) */}
        <nav className={`aan-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          
          {/* === MOBILE SEARCH (Hidden on Desktop) === */}
          <div className="mobile-only mobile-search-container">
            <input type="text" placeholder="Type & hit enter" />
            <button><SearchIcon /></button>
          </div>

          {/* === MENU LINKS === */}
          <Link to="/policy" className="nav-item nav-policy" onClick={closeMenu}>Policy</Link>
          <Link to="/diplomacy" className="nav-item nav-diplomacy" onClick={closeMenu}>Diplomacy</Link>
          <Link to="/economy" className="nav-item nav-economy" onClick={closeMenu}>Economy</Link>
          <Link to="/opinion" className="nav-item nav-opinion" onClick={closeMenu}>Opinion</Link>
          <Link to="/events" className="nav-item nav-events" onClick={closeMenu}>Events</Link>
          
          {/* === MOBILE SOCIAL ICONS (Hidden on Desktop) === */}
          <div className="mobile-only mobile-socials">
             <a href="https://facebook.com" target="_blank" rel="noreferrer"><FbIcon /></a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer"><InstaIcon /></a>
             <a href="https://youtube.com" target="_blank" rel="noreferrer"><YtIcon /></a>
          </div>

        </nav>

        {/* 4. RIGHT PANEL (Desktop Only) */}
        <div className="aan-right-panel">
          <Link to="/subscribe" className="aan-subscribe-btn">Subscribe</Link>
          <div className="aan-mini-search">
            <input type="text" placeholder="Search" />
            <button><SearchIcon /></button>
          </div>
        </div>

        {/* 5. MOBILE SEARCH ICON TOGGLE */}
        <button className="aan-mobile-search-toggle" aria-label="Search">
           <SearchIcon />
        </button>

      </div>
    </header>
  );
};

export default Header;