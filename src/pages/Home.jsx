import React from 'react';

// Simple Search Icon Component
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const Home = () => {
  // Mock Data from your video
  const heroArticle = {
    category: "Diplomacy",
    title: "India-EU FTA – a Major Shift in Global Trade Ties",
    excerpt: "Prime Minister Narendra Modi with EU leaders Ursula von der Leyen and António Costa sign the much awaited India-EU Free Trade Agreement in New Delhi.",
    // Using a placeholder image - replace with your real asset
    image: "https://placehold.co/1200x675/e6e6e6/111111?text=India-EU+Trade+Deal"
  };

  const newsGrid = [
    { title: "Why Food Is Growing Faster—But Making People Hungrier", category: "Economy", date: "Jan 7, 2026" },
    { title: "The Silent Rise of Metabolic Disorders in Non-Obese Populations", category: "Health", date: "Jan 7, 2026" },
    { title: "Digital Sovereignty from Concept to Policy", category: "Policy", date: "Dec 29, 2025" },
    { title: "Interview: De-Dollarisation and Currency Alliances", category: "Finance", date: "Sep 2, 2025" }
  ];

  return (
    <main className="aan-main">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={heroArticle.image} alt="Hero" className="hero-image"/>
        </div>
        <div className="hero-content">
          <span className="category-tag">{heroArticle.category}</span>
          <h1>{heroArticle.title}</h1>
          <p className="hero-excerpt">{heroArticle.excerpt}</p>
          <a href="#" className="read-more">Read Analysis &rarr;</a>
        </div>
      </section>

      <div className="content-divider"></div>

      {/* 2-Column Grid */}
      <div className="grid-layout">
        
        {/* Left Column: News Feed */}
        <div className="news-feed">
          <h3 className="section-label">Latest Stories</h3>
          <div className="card-grid">
            {newsGrid.map((news, index) => (
              <article key={index} className="news-card">
                <div className="card-image"></div>
                <div className="card-meta">{news.category} • {news.date}</div>
                <h4>{news.title}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-widget">
            <h3 className="section-label">Opinion</h3>
            <ul className="opinion-list">
              <li>
                <span className="author">Amb. K. P. Fabian</span>
                <a href="#">Ukraine, Global Shifts, and the Future of Business</a>
              </li>
              <li>
                <span className="author">Dr. Madhukar</span>
                <a href="#">The Toll of Content Moderation on Stage</a>
              </li>
            </ul>
          </div>
          
          <div className="sidebar-widget">
            <h3 className="section-label">Search</h3>
            <div className="search-box">
              <input type="text" placeholder="Search articles..." />
              <button><SearchIcon /></button>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default Home;