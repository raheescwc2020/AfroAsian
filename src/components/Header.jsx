import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple Search Icon SVG
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="aan-masthead">
      <div className="aan-masthead-inner">
        
        {/* 1. MOBILE MENU TOGGLE (Moved visually to left via CSS) */}
        <button 
          className="aan-menu-toggle" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* 2. LOGO (Centered on mobile via CSS) */}
        <div className="aan-logo">
          <Link to="/">AAN</Link>
        </div>
        
        {/* 3. DESKTOP NAVIGATION (Hidden on Mobile) */}
        <nav className={`aan-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/policy">Policy</Link>
          <Link to="/diplomacy">Diplomacy</Link>
          <Link to="/economy">Economy</Link>
          <Link to="/opinion">Opinion</Link>
          <Link to="/events">Events</Link>
        </nav>

        {/* 4. SUBSCRIBE CTA (Hidden on Mobile) */}
        <div className="aan-cta">
          <Link to="/subscribe">Subscribe</Link>
        </div>

        {/* 5. MOBILE SEARCH ICON (New Addition) */}
        <button className="aan-mobile-search" aria-label="Search">
           <SearchIcon />
        </button>

      </div>
    </header>
  );
};

export default Header;