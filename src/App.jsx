import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import './App.css';
import tracLogo from './traclogo.png';
import ChartDisplay from './ChartDisplay';
import ModalComponent from './ModalComponent';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [visualizationMode, setVisualizationMode] = useState('bar');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingChart, setLoadingChart] = useState(false);
  const [allIndicatorsData, setAllIndicatorsData] = useState({});
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        const response = await import('./indicatorsData');
        setAllIndicatorsData(response.default);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching indicators data:", error);
        setError("Failed to load data. Please try again later."); // Set user-friendly error message
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (indicator) => {
    setSelectedIndicator(indicator);
    setShowModal(true);
    setVisualizationMode('bar'); // Reset mode on open
    setLoadingChart(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIndicator(null);
    setVisualizationMode('bar'); // Reset mode on close
    setLoadingChart(false);
  };

  useEffect(() => {
    if (showModal) {
      setLoadingChart(true);
      const timer = setTimeout(() => {
        setLoadingChart(false);
      }, 800); // Simulate loading time
      return () => clearTimeout(timer);
    }
  }, [visualizationMode, showModal]);

  const filteredIndicators = Object.entries(allIndicatorsData).reduce((acc, [category, indicators]) => {
    const filtered = indicators.filter(indicator =>
      indicator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="App-logo">
            <img src={tracLogo} alt="TRACINDIA Logo" className="logo-image" />
          </div>
          <ul className="App-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#data-visualization">Data Visualization</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section id="home" className="hero-section">
          <h1>Empowering Insights Through Data</h1>
          <p>Explore comprehensive data visualizations for a deeper understanding.</p>
          <a href="#data-visualization" className="primary-button">View Visualizations</a>
        </section>

        <section id="data-visualization" className="data-viz-section" aria-labelledby="data-viz-heading">
          <h2 id="data-viz-heading">Our Data Visualizations</h2>
          {error && <p className="error-message" role="alert">{error}</p>} {/* Display error message */}
          <input
            type="text"
            placeholder="Search indicators..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search indicators"
          />
          <div className="viz-categories">
            {Object.entries(filteredIndicators).map(([category, indicators]) => (
              <div key={category} className="viz-category">
                <h3>{category}</h3>
                <div className="viz-grid">
                  {indicators.map((indicator, index) => (
                    <div key={index} className="viz-card">
                      <h4>{indicator.name}</h4>
                      <div className="chart-placeholder"></div> {/* Placeholder for chart */}
                      <p>Mock data for {indicator.name}.</p>
                      <button onClick={() => handleViewDetails(indicator)} className="view-details-button">View Details</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>TRACINDIA is dedicated to providing insightful data visualizations to help understand complex information. Our mission is to make data accessible and understandable for everyone, fostering informed decision-making and promoting transparency.</p>
          <p>We believe in the power of data to drive positive change and are committed to presenting information in a clear, concise, and visually engaging manner. Our team comprises experts in data analysis, design, and technology, working collaboratively to bring you the most relevant and impactful visualizations.</p>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div className="contact-info">
            <p>Email: <a href="mailto:info@tracindia.org">info@tracindia.org</a></p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: 123 Data Insights Ave, New Delhi, India</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" aria-label="Your Name" />
            <input type="email" placeholder="Your Email" aria-label="Your Email" />
            <textarea placeholder="Your Message" aria-label="Your Message"></textarea>
            <button type="submit" className="primary-button">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 TRACINDIA. All rights reserved.</p>
      </footer>

      <ModalComponent
        showModal={showModal}
        selectedIndicator={selectedIndicator}
        handleCloseModal={handleCloseModal}
        visualizationMode={visualizationMode}
        setVisualizationMode={setVisualizationMode}
        loadingChart={loadingChart}
      />
    </div>
  );
}

export default App;