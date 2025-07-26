import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { geoAlbers, geoPath } from "d3-geo";

const INDIA_TOPO_JSON = "/india.json";

function ChartDisplay({ selectedIndicator, visualizationMode, loadingChart, setVisualizationMode }) {
  const mapRef = useRef();
  const [geographies, setGeographies] = useState([]);
  const [projectionConfig, setProjectionConfig] = useState({
    parallels: [20, 30],
    rotate: [-78, 0],
    center: [0, 22],
    scale: 800
  });

  useEffect(() => {
    if (visualizationMode === 'map' && mapRef.current) {
      fetch(INDIA_TOPO_JSON)
        .then(response => response.json())
        .then(topojsonData => {
          setGeographies(topojsonData.features);

          const projection = geoAlbers()
            .parallels([20, 30])
            .rotate([-78, 0]);

          const path = geoPath().projection(projection);
          const bounds = path.bounds(topojsonData);

          const width = mapRef.current.offsetWidth;
          const height = mapRef.current.offsetHeight;

          const dx = bounds[1][0] - bounds[0][0];
          const dy = bounds[1][1] - bounds[0][1];
          const x = (bounds[0][0] + bounds[1][0]) / 2;
          const y = (bounds[0][1] + bounds[1][1]) / 2;

          const scale = Math.max(1, Math.min(800, 0.9 / Math.max(dx / width, dy / height)));
          const translateX = width / 2 - scale * x;
          const translateY = height / 2 - scale * y;

          setProjectionConfig({
            parallels: [20, 30],
            rotate: [-78, 0],
            center: [0, 22],
            scale: scale,
            translate: [translateX, translateY]
          });
        })
        .catch(error => console.error("Error loading GeoJSON:", error));
    }
  }, [visualizationMode, mapRef.current]);

  if (loadingChart) {
    return <div className="chart-loading" aria-live="polite">Loading Chart...</div>;
  }
  if (!selectedIndicator || (!selectedIndicator.data && !selectedIndicator.regionalData)) return null;

  const data = selectedIndicator.data ? selectedIndicator.data.map((d, i) => ({ name: `Point ${i + 1}`, value: d.value })) : [];

  switch (visualizationMode) {
    case 'bar':
      return (
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#007aff" />
          </BarChart>
        </ResponsiveContainer>
      );
    case 'line':
      return (
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#007aff" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      );
    case 'pie':
      return (
        <ResponsiveContainer width="100%" height={450}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#007aff"
              dataKey="value"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    case 'map':
      const regionalData = selectedIndicator.regionalData || [];
      const colorScale = scaleQuantile()
        .domain(regionalData.map(d => d.value))
        .range([
          "#ffedea",
          "#ffcec5",
          "#ffad9f",
          "#ff8a75",
          "#ff5533",
          "#e2492d",
          "#cc4527",
          "#b23b21",
          "#99321b",
          "#802816",
        ]);

      return (
        <div className="map-chart-container" ref={mapRef}>
          <ComposableMap
            projection="geoAlbers"
            projectionConfig={projectionConfig}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geographies}>
              {({ geographies }) =>
                geographies.map(geo => {
                  console.log("Geo Name:", geo.properties.ST_NM);
                  const cur = regionalData.find(s => s.name === geo.properties.ST_NM);
                  console.log("Found regional data for", geo.properties.ST_NM, ":", cur);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={cur ? colorScale(cur.value) : "#DDD"}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`${geo.properties.ST_NM}: ${cur ? cur.value : "N/A"}`}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <div className="map-legend">
            {colorScale.range().map((color, i) => (
              <div key={color} className="map-legend-item">
                <span className="map-legend-color" style={{ backgroundColor: color }}></span>
                <span>
                  {i === 0 ? `Less than ${colorScale.invertExtent(color)[1].toFixed(0)}%` : 
                   i === colorScale.range().length - 1 ? `More than ${colorScale.invertExtent(color)[0].toFixed(0)}%` : 
                   `${colorScale.invertExtent(color)[0].toFixed(0)} - ${colorScale.invertExtent(color)[1].toFixed(0)}%`}
                </span>
              </div>
            ))}
          </div>
          <ReactTooltip id="my-tooltip" />
        </div>
      );
    default:
      return null;
  }
}

export default ChartDisplay;
