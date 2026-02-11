import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple Search Icon SVG
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="aan-masthead">
      <div className="aan-masthead-inner">
        
        {/* 1. MOBILE MENU TOGGLE (Left on Mobile) */}
        <button 
          className="aan-menu-toggle" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* 2. LOGO (Centered) */}
        <div className="aan-logo">
          <Link to="/">AAN</Link>
        </div>
        
        {/* 3. NAVIGATION (Centered Below Logo on Desktop) */}
        <nav className={`aan-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/policy" className="nav-item nav-policy">Policy</Link>
          <Link to="/diplomacy" className="nav-item nav-diplomacy">Diplomacy</Link>
          <Link to="/economy" className="nav-item nav-economy">Economy</Link>
          <Link to="/opinion" className="nav-item nav-opinion">Opinion</Link>
          <Link to="/events" className="nav-item nav-events">Events</Link>
        </nav>

        {/* 4. RIGHT PANEL: SUBSCRIBE + SEARCH (Desktop Only) */}
        <div className="aan-right-panel">
          <Link to="/subscribe" className="aan-subscribe-btn">Subscribe</Link>
          
          <div className="aan-mini-search">
            <input type="text" placeholder="Search" />
            <button><SearchIcon /></button>
          </div>
        </div>

        {/* 5. MOBILE SEARCH ICON (Right on Mobile) */}
        <button className="aan-mobile-search-toggle" aria-label="Search">
           <SearchIcon />
        </button>

      </div>
    </header>
  );
};

export default Header;