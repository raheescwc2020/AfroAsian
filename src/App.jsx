import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
// Placeholder for other pages to prevent errors
const Placeholder = ({ title }) => (
  <div className="aan-main">
    <h1 style={{fontSize: '32px', fontWeight: '700'}}>{title}</h1>
    <p>Section content coming soon.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="aan-app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Placeholder title="Policy" />} />
          <Route path="/diplomacy" element={<Placeholder title="Diplomacy" />} />
          <Route path="/economy" element={<Placeholder title="Economy" />} />
          <Route path="/opinion" element={<Placeholder title="Opinion" />} />
          <Route path="/events" element={<Placeholder title="Events" />} />
        </Routes>
       <Footer/>
      </div>
    </Router>
  );
};

export default App;