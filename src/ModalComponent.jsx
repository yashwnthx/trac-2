import React from 'react';
import ChartDisplay from './ChartDisplay';

function ModalComponent({
  showModal,
  selectedIndicator,
  handleCloseModal,
  visualizationMode,
  setVisualizationMode,
  loadingChart,
}) {
  return (
    showModal && selectedIndicator && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button onClick={handleCloseModal} className="modal-close-button">X</button>
          <h3>{selectedIndicator.name} Details</h3>
          <div className="visualization-modes">
            <button onClick={() => setVisualizationMode('bar')} className={visualizationMode === 'bar' ? 'active' : ''}>Bar Chart</button>
            <button onClick={() => setVisualizationMode('line')} className={visualizationMode === 'line' ? 'active' : ''}>Line Chart</button>
            <button onClick={() => setVisualizationMode('pie')} className={visualizationMode === 'pie' ? 'active' : ''}>Pie Chart</button>
            <button onClick={() => setVisualizationMode('map')} className={visualizationMode === 'map' ? 'active' : ''}>Map View</button>
          </div>
          <div className="chart-container">
            <ChartDisplay
              selectedIndicator={selectedIndicator}
              visualizationMode={visualizationMode}
              loadingChart={loadingChart}
              setVisualizationMode={setVisualizationMode}
            />
          </div>
          <p>This is a detailed view for the indicator: <strong>{selectedIndicator.name}</strong>. Here you would see more specific data, trends, and analysis related to this indicator. This section can include interactive charts, tables, and additional descriptive text.</p>
          <div className="modal-actions">
            <button onClick={() => alert(`Downloading data for ${selectedIndicator.name}...`)} className="download-button" aria-label={`Download data for ${selectedIndicator.name}`}>Download Data</button>
          </div>
          <div className="about-data-section">
            <h4>About this Data</h4>
            <p>The data presented here is for illustrative purposes only and does not represent real-time or accurate statistics. It is generated mock data to demonstrate the visualization capabilities of this platform.</p>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalComponent;
