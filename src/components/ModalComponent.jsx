import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Lazy load ChartDisplay for code splitting
const ChartDisplay = lazy(() => import('./ChartDisplay'));

function ModalComponent({
  showModal,
  selectedIndicator,
  handleCloseModal,
  visualizationMode,
  setVisualizationMode,
  loadingChart,
}) {
  if (!showModal || !selectedIndicator) return null;

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h2>{selectedIndicator.name}</h2>
          </div>

          <button
            onClick={handleCloseModal}
            className="modal-close"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <Suspense fallback={<LoadingSpinner message="Loading visualization..." />}>
            <ChartDisplay
              selectedIndicator={selectedIndicator}
              visualizationMode={visualizationMode}
              setVisualizationMode={setVisualizationMode}
              loadingChart={loadingChart}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
