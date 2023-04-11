import { Box } from "@mui/material";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const MapChart = () => {
  return (
    <Box>
      <ComposableMap
    style={{height:'100vh',
    width:'100%'
  }}
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [-100, -15, 0],
      center: [-20, 10],
      scale: 200
    }}
    
  >
    <Geographies
      geography="/features.json"
      fill="#2C065D"
      stroke="#FFFFFF"
      strokeWidth={0.5}
    >
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
    <Annotation
      subject={[77.594566, 12.971599]}
      dx={90}
      dy={-30}
      connectorProps={{
        stroke: "white",
        strokeWidth: 2,
        strokeLinecap: "round"
      }}
    >
      <text x="8" y="-10" fontSize={40} textAnchor="middle" alignmentBaseline="middle" fill="#FFFFFF">
        {"Bangalore, India"}
      </text>
    </Annotation>
    <Marker coordinates={[77.594566, 12.971599]}>
      <circle r={4} fill="#F53" />
    </Marker>
  </ComposableMap>
    </Box>
  );
};

export default MapChart;
