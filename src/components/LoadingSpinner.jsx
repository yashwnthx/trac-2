import React from 'react';

const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className={`spinner ${sizeClasses[size]}`} aria-hidden="true">
        <div className="spinner-circle"></div>
      </div>
      <span className="loading-message">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
