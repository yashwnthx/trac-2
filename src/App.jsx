import React, { useState, Suspense, lazy } from 'react';
import './styles/global.css';
import ModalComponent from './components/ModalComponent';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import indicatorsData from './data/indicatorsData';

// Lazy load the ChartDisplay component for better performance
const ChartDisplay = lazy(() => import('./components/ChartDisplay'));

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [loadingChart, setLoadingChart] = useState(false);
  const [visualizationMode, setVisualizationMode] = useState('states');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentView, setCurrentView] = useState('categories');
  const [searchTerm, setSearchTerm] = useState('');

  // Category configuration with icons and updated counts
  const categoryInfo = {
    amenities: {
      name: 'Amenities',
      description: 'Infrastructure and basic amenities in rural areas',
      count: 5,
      icon: '🏘️'
    },
    energy: {
      name: 'Energy',
      description: 'Energy access and renewable energy sources',
      count: 4,
      icon: '⚡'
    },
    wash: {
      name: 'WASH',
      description: 'Water, Sanitation, and Hygiene facilities',
      count: 3,
      icon: '💧'
    },
    education: {
      name: 'Education',
      description: 'Educational infrastructure and literacy',
      count: 3,
      icon: '📚'
    },
    health: {
      name: 'Health',
      description: 'Healthcare access and health outcomes',
      count: 2,
      icon: '🏥'
    },
    nutrition: {
      name: 'Nutrition',
      description: 'Nutritional status and food security',
      count: 2,
      icon: '🍎'
    },
    livelihood: {
      name: 'Livelihood',
      description: 'Employment and income opportunities',
      count: 1,
      icon: '💼'
    },
    gender: {
      name: 'Gender',
      description: 'Gender equality and women empowerment',
      count: 1,
      icon: '👥'
    },
    people: {
      name: 'People',
      description: 'Demographics and population statistics',
      count: 1,
      icon: '👨‍👩‍👧‍👦'
    }
  };

  // Calculate total indicators
  const totalIndicators = Object.values(categoryInfo).reduce((sum, cat) => sum + cat.count, 0);

  // Event handlers
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentView('indicators');
    setSearchTerm('');
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory(null);
    setSearchTerm('');
  };

  const handleViewDetails = (indicator) => {
    setSelectedIndicator(indicator);
    setShowModal(true);
    setLoadingChart(true);
    setTimeout(() => setLoadingChart(false), 800);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIndicator(null);
  };

  // Filter indicators based on search term
  const getFilteredIndicators = () => {
    if (!selectedCategory) return [];

    const categoryIndicators = indicatorsData[selectedCategory] || [];
    if (!searchTerm) return categoryIndicators;

    return categoryIndicators.filter(indicator =>
      indicator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      indicator.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredIndicators = getFilteredIndicators();

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <a href="#" className="logo" aria-label="TRAC Home">
              <img src="/traclogo.png" alt="TRAC - The Rural Analytics Centre Logo" />
            </a>
            <ul className="nav-links" role="menubar">
              <li role="none"><a href="#insights" className="nav-link" role="menuitem">Data Insights</a></li>
              <li role="none"><a href="#about" className="nav-link" role="menuitem">About</a></li>
              <li role="none"><a href="#contact" className="nav-link" role="menuitem">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" role="banner">
        <div className="container">
          <div className="hero-content">
            <h1>Rural Analytics & Development Insights</h1>
            <p>
              Comprehensive data-driven insights for sustainable rural development across India
            </p>
            <div className="hero-stats" role="region" aria-label="Key statistics">
              <div className="hero-stat">
                <span className="hero-stat-number" aria-label={`${totalIndicators} plus data indicators`}>{totalIndicators}+</span>
                <span className="hero-stat-label">Data Indicators</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number" aria-label="36 states and union territories">36</span>
                <span className="hero-stat-label">States & UTs</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">9</span>
                <span className="hero-stat-label">Key Categories</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#insights" className="btn btn-primary">Explore Data Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="insights" className="main-content">
        <div className="container">
          {currentView === 'categories' ? (
            <>
              <div className="section-header">
                <h2>Explore Data Categories</h2>
                <p>Choose a category to explore specific indicators and insights for rural development</p>
                <div className="section-divider"></div>
              </div>

              <div className="category-grid">
                {Object.entries(categoryInfo).map(([key, category]) => (
                  <div
                    key={key}
                    className="category-card"
                    onClick={() => handleCategorySelect(key)}
                  >
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                    <span className="category-count">
                      📊 {category.count} indicators
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="indicators-section">
              <button onClick={handleBackToCategories} className="btn btn-secondary back-button">
                ← Back to Categories
              </button>

              <div className="section-header">
                <h2>{categoryInfo[selectedCategory]?.name} Indicators</h2>
                <p>{categoryInfo[selectedCategory]?.description}</p>
              </div>

              <div className="search-container">
                <label htmlFor="indicator-search" className="sr-only">Search indicators</label>
                <input
                  id="indicator-search"
                  type="text"
                  placeholder="Search indicators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Search through available indicators"
                />
              </div>

              <div className="indicators-grid" role="grid" aria-label="Available indicators">
                {filteredIndicators.length > 0 ? (
                  filteredIndicators.map((indicator, index) => (
                    <div
                      key={index}
                      className="indicator-card"
                      onClick={() => handleViewDetails(indicator)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleViewDetails(indicator);
                        }
                      }}
                      tabIndex={0}
                      role="gridcell"
                      aria-label={`View details for ${indicator.name}: ${indicator.description}`}
                    >
                      <h4 className="indicator-name">{indicator.name}</h4>
                      <p className="indicator-description">{indicator.description}</p>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)' }} role="status" aria-live="polite">
                    {searchTerm ? 'No indicators found matching your search.' : 'No indicators available for this category.'}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About TRAC</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                The Rural Analytics Centre (TRAC) is a comprehensive platform designed to empower
                rural development through data-driven insights and evidence-based decision making.
              </p>
              <p>
                Our mission is to bridge the data gap in rural development by providing accessible,
                actionable insights that help policymakers, researchers, and development practitioners
                make informed decisions for sustainable rural growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with the TRAC team for collaborations, data requests, or technical support</p>
            <div className="section-divider"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <h4>Email</h4>
                  <p>info@trac-india.org</p>
                </div>
                <div className="contact-method">
                  <h4>Research Inquiries</h4>
                  <p>research@trac-india.org</p>
                </div>
                <div className="contact-method">
                  <h4>Technical Support</h4>
                  <p>support@trac-india.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/traclogo.png" alt="TRAC" />
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 TRAC India. Transforming Rural Analytics for Development.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <ErrorBoundary>
        <ModalComponent
          showModal={showModal}
          selectedIndicator={selectedIndicator}
          handleCloseModal={handleCloseModal}
          visualizationMode={visualizationMode}
          setVisualizationMode={setVisualizationMode}
          loadingChart={loadingChart}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
