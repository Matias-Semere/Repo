import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <button 
          className="toggle-btn" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>A modern React website with nice styling.</p>
        <a href="#features" className="btn">Explore Features</a>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-card">
            <h3>🚀 Fast</h3>
            <p>Optimized React components for speed and performance.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Stylish</h3>
            <p>Clean modern design with responsive layout.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Easy</h3>
            <p>Simple structure, easy to customize and expand.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
