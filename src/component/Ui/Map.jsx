import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      className="w-full h-full object-fill object-center"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-8.0, -52.0, 0],
        center: [-10, -15],
        scale: 2000,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#d3b9bc"
        stroke="#731b22"
        strokeWidth={0.5}
        className=" opacity-50"
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[5.4167, 35.4333]}
        dx={30}
        dy={-52}
        connectorProps={{
          stroke: "#731b22",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-2"
          // y="14"
          className="font-bold "
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#731b22"
        >
          {"Sétif"}
        </text>
      </Annotation>
      <Annotation
        subject={[3.0588, 36.5538]}
        dx={-20}
        dy={-15}
        connectorProps={{
          stroke: "#731b22",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-2"
          // y="14"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#731b22"
          className="font-bold text-2xl"
        >
          {"Algiers"}
        </text>
      </Annotation>

      <Annotation
        subject={[0.6331, 35.6969]}
        dx={30}
        dy={30}
        connectorProps={{
          stroke: "#731b22",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="16"
          y="14"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#731b22"
          className="font-bold "
        >
          {"Oran"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
