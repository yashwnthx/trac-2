import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

const INDIA_TOPO_JSON = "/india.json";

// State name mapping for better data matching
const STATE_NAME_MAPPING = {
  // Handle common variations and aliases
  'Jammu & Kashmir': 'Jammu and Kashmir',
  'Jammu and Kashmir': 'Jammu and Kashmir',
  'Andaman & Nicobar Island': 'Andaman and Nicobar Islands',
  'Andaman & Nicobar Islands': 'Andaman and Nicobar Islands',
  'Dadara & Nagar Havelli': 'Dadra and Nagar Haveli',
  'Dadra & Nagar Haveli': 'Dadra and Nagar Haveli',
  'Daman & Diu': 'Daman and Diu',
  'NCT of Delhi': 'Delhi',
  'Delhi': 'Delhi',
  'Uttarakhand': 'Uttarakhand',
  'Uttaranchal': 'Uttarakhand',
  // Ensure exact matches for common states
  'Uttar Pradesh': 'Uttar Pradesh',
  'Maharashtra': 'Maharashtra',
  'Bihar': 'Bihar',
  'West Bengal': 'West Bengal',
  'Madhya Pradesh': 'Madhya Pradesh',
  'Tamil Nadu': 'Tamil Nadu',
  'Rajasthan': 'Rajasthan',
  'Karnataka': 'Karnataka',
  'Gujarat': 'Gujarat',
  'Andhra Pradesh': 'Andhra Pradesh',
  'Odisha': 'Odisha',
  'Orissa': 'Odisha',
  'Kerala': 'Kerala',
  'Assam': 'Assam',
  'Punjab': 'Punjab',
  'Haryana': 'Haryana',
  'Telangana': 'Telangana',
  'Jharkhand': 'Jharkhand',
  'Chhattisgarh': 'Chhattisgarh',
  'Himachal Pradesh': 'Himachal Pradesh',
  'Arunachal Pradesh': 'Arunachal Pradesh',
  'Meghalaya': 'Meghalaya',
  'Manipur': 'Manipur',
  'Mizoram': 'Mizoram',
  'Nagaland': 'Nagaland',
  'Sikkim': 'Sikkim',
  'Tripura': 'Tripura',
  'Goa': 'Goa',
  'Puducherry': 'Puducherry',
  'Pondicherry': 'Puducherry',
  'Chandigarh': 'Chandigarh',
  'Lakshadweep': 'Lakshadweep',
  'Ladakh': 'Ladakh'
};

// Enhanced color palette for visualizations
const COLORS = [
  '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe',
  '#1d4ed8', '#1e40af', '#1e3a8a', '#312e81', '#1e1b4b'
];

const PIE_COLORS = [
  '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd',
  '#dc2626', '#ea580c', '#ca8a04', '#65a30d',
  '#059669', '#0891b2', '#7c3aed', '#c026d3'
];

function ChartDisplay({ selectedIndicator, visualizationMode, loadingChart, setVisualizationMode }) {
  const [geographies, setGeographies] = useState([]);
  const [colorScale, setColorScale] = useState(null);
  const [dataView, setDataView] = useState('yearly'); // 'yearly' or 'regional'
  const [mapTooltip, setMapTooltip] = useState({ show: false, content: '', x: 0, y: 0 });

  useEffect(() => {
    if (visualizationMode === 'map' && selectedIndicator?.regionalData) {
      fetch(INDIA_TOPO_JSON)
        .then(response => response.json())
        .then(topojsonData => {
          setGeographies(topojsonData.features);

          const values = selectedIndicator.regionalData.map(d => d.value);
          const scale = scaleQuantile()
            .domain(values)
            .range(['#f0f9ff', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1']);
          setColorScale(() => scale);
        })
        .catch(error => console.error('Error loading map data:', error));
    }
  }, [visualizationMode, selectedIndicator]);

  if (loadingChart) {
    return (
      <div className="chart-loading">
        <div className="loading-spinner"></div>
        <p>Loading visualization...</p>
      </div>
    );
  }

  if (!selectedIndicator) {
    return (
      <div className="chart-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">📊</div>
          <h3>No Data Selected</h3>
          <p>Select an indicator to view detailed visualizations</p>
        </div>
      </div>
    );
  }

  const yearlyData = selectedIndicator.data || [];
  const regionalData = selectedIndicator.regionalData || [];
  const chartData = dataView === 'yearly' ? yearlyData : regionalData;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-value">
            {`Value: ${payload[0].value}${selectedIndicator.unit || ''}`}
          </p>
          {selectedIndicator.description && (
            <p className="tooltip-description">{selectedIndicator.description}</p>
          )}
        </div>
      );
    }
    return null;
  };

  const getRegionValue = (regionName) => {
    if (!regionName || !regionalData) return 0;

    // Normalize the region name using mapping
    const normalizedRegionName = STATE_NAME_MAPPING[regionName] || regionName;

    // First try exact match with normalized name
    let regionData = regionalData.find(d =>
      d.name?.toLowerCase() === normalizedRegionName.toLowerCase() ||
      d.region?.toLowerCase() === normalizedRegionName.toLowerCase() ||
      d.name?.toLowerCase() === regionName.toLowerCase() ||
      d.region?.toLowerCase() === regionName.toLowerCase()
    );

    // If no exact match, try partial match
    if (!regionData) {
      regionData = regionalData.find(d =>
        d.name?.toLowerCase()?.includes(normalizedRegionName.toLowerCase()) ||
        d.region?.toLowerCase()?.includes(normalizedRegionName.toLowerCase()) ||
        normalizedRegionName.toLowerCase()?.includes(d.name?.toLowerCase()) ||
        normalizedRegionName.toLowerCase()?.includes(d.region?.toLowerCase()) ||
        d.name?.toLowerCase()?.includes(regionName.toLowerCase()) ||
        d.region?.toLowerCase()?.includes(regionName.toLowerCase()) ||
        regionName.toLowerCase()?.includes(d.name?.toLowerCase()) ||
        regionName.toLowerCase()?.includes(d.region?.toLowerCase())
      );
    }

    return regionData?.value || 0;
  };

  const getFillColor = (regionName) => {
    if (!colorScale) return '#f0f0f0';
    const value = getRegionValue(regionName);
    return value > 0 ? colorScale(value) : '#f0f0f0';
  };

  const renderDataViewToggle = () => {
    if (!yearlyData.length || !regionalData.length) return null;

    return (
      <div className="data-view-toggle">
        <button
          className={`toggle-btn ${dataView === 'yearly' ? 'active' : ''}`}
          onClick={() => setDataView('yearly')}
        >
          Yearly Trends
        </button>
        <button
          className={`toggle-btn ${dataView === 'regional' ? 'active' : ''}`}
          onClick={() => setDataView('regional')}
        >
          Regional Data
        </button>
      </div>
    );
  };

  const renderVisualizationControls = () => (
    <div className="visualization-controls">
      <div className="chart-type-selector">
        <button
          className={`chart-btn ${visualizationMode === 'bar' ? 'active' : ''}`}
          onClick={() => setVisualizationMode('bar')}
          title="Bar Chart"
        >
          Bar Chart
        </button>
        <button
          className={`chart-btn ${visualizationMode === 'line' ? 'active' : ''}`}
          onClick={() => setVisualizationMode('line')}
          title="Line Chart"
        >
          Line Chart
        </button>
        <button
          className={`chart-btn ${visualizationMode === 'area' ? 'active' : ''}`}
          onClick={() => setVisualizationMode('area')}
          title="Area Chart"
        >
          Area Chart
        </button>
        <button
          className={`chart-btn ${visualizationMode === 'pie' ? 'active' : ''}`}
          onClick={() => setVisualizationMode('pie')}
          title="Pie Chart"
        >
          Pie Chart
        </button>
        {regionalData.length > 0 && (
          <button
            className={`chart-btn ${visualizationMode === 'map' ? 'active' : ''}`}
            onClick={() => setVisualizationMode('map')}
            title="Map View"
          >
            Map View
          </button>
        )}
      </div>
      {renderDataViewToggle()}
    </div>
  );

  const renderChart = () => {
    if (!chartData.length) {
      return (
        <div className="no-data-message">
          <p>No data available for visualization</p>
        </div>
      );
    }

    switch (visualizationMode) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#666' }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis tick={{ fontSize: 12, fill: '#666' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
                className="chart-bar"
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#666' }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis tick={{ fontSize: 12, fill: '#666' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: '#2563eb', strokeWidth: 2, fill: '#ffffff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#666' }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis tick={{ fontSize: 12, fill: '#666' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'pie':
        const pieData = chartData.slice(0, 10); // Limit to top 10 for readability
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={120}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'map':
        if (!regionalData.length) {
          return (
            <div className="no-map-data">
              <p>Regional data not available for map visualization</p>
            </div>
          );
        }

        return (
          <div className="map-container" style={{ position: 'relative' }}>
            <ResponsiveContainer width="100%" height={400}>
              <div style={{ width: '100%', height: '100%' }}>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 700,
                    center: [78.5, 23.5]
                  }}
                  width={800}
                  height={400}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const regionName = geo.properties?.ST_NM || geo.properties?.NAME_1 || geo.properties?.name || 'Unknown';
                        const value = getRegionValue(regionName);

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={getFillColor(regionName)}
                            stroke="#ffffff"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: {
                                fill: "#1d4ed8",
                                outline: "none",
                                cursor: "pointer"
                              },
                              pressed: { outline: "none" }
                            }}
                            onMouseEnter={(evt) => {
                              const { clientX, clientY } = evt;
                              setMapTooltip({
                                show: true,
                                content: `${regionName}: ${value}${selectedIndicator.unit || ''}`,
                                x: clientX,
                                y: clientY
                              });
                            }}
                            onMouseLeave={() => {
                              setMapTooltip({ show: false, content: '', x: 0, y: 0 });
                            }}
                            onMouseMove={(evt) => {
                              const { clientX, clientY } = evt;
                              setMapTooltip(prev => ({
                                ...prev,
                                x: clientX,
                                y: clientY
                              }));
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </div>
            </ResponsiveContainer>

            {/* Custom Map Tooltip */}
            {mapTooltip.show && (
              <div
                className="map-tooltip"
                style={{
                  position: 'fixed',
                  left: mapTooltip.x + 10,
                  top: mapTooltip.y - 10,
                  backgroundColor: 'white',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  color: '#1e293b',
                  fontWeight: '500',
                  pointerEvents: 'none',
                  zIndex: 1000,
                  whiteSpace: 'nowrap'
                }}
              >
                {mapTooltip.content}
              </div>
            )}

            {/* Map Legend */}
            <div className="map-legend">
              <div className="legend-title">Value Range</div>
              <div className="legend-scale">
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#f0f9ff' }}></div>
                  <span>Low</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#38bdf8' }}></div>
                  <span>Medium</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#0369a1' }}></div>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="no-data-message">
            <p>Chart type not supported</p>
          </div>
        );
    }
  };

  const getDataSummary = () => {
    if (!chartData.length) return null;

    const values = chartData.map(d => d.value);
    const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
    const max = Math.max(...values);
    const min = Math.min(...values);

    return (
      <div className="data-summary">
        <div className="summary-item">
          <span className="summary-label">Average:</span>
          <span className="summary-value">{avg}{selectedIndicator.unit}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Maximum:</span>
          <span className="summary-value">{max}{selectedIndicator.unit}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Minimum:</span>
          <span className="summary-value">{min}{selectedIndicator.unit}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Data Points:</span>
          <span className="summary-value">{chartData.length}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="chart-display">
      {renderVisualizationControls()}

      <div className="chart-content">
        {renderChart()}
      </div>

      {getDataSummary()}
    </div>
  );
}

export default ChartDisplay;
