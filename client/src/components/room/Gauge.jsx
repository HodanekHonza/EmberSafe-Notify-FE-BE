import React from "react";
import GaugeComponent from "react-gauge-component";
export default function Gauge({
  lastKnownTemperature, thresholds}) {
  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 0,
        gradient: true,
        subArcs: [
          {
            limit: thresholds.thresholdCold.high,
            color: "#8884d8",
            showTick: true,
            tooltip: {
              text: "Too low temperature!",
            },
          },
          {
            limit: thresholds.thresholdNormal.high,
            color: "#5BE12C",
            showTick: true,
            tooltip: {
              text: "Normal temperature",
            },
          },
          {
            limit: thresholds.thresholdHot.high,
            color: "#F5CD19",
            showTick: true,
            tooltip: {
              text: "High temperature!",
            },
          },
          {
            color: "#EA4228",
            tooltip: {
              text: "Dangerously high temperature!",
            },
          },
        ],
      }}
      value={lastKnownTemperature}
      minValue={thresholds.thresholdCold.low}
      maxValue={thresholds.thresholdDanger.high}
      labels={{
        valueLabel: {
          formatTextValue: (value) => value + "ºC",
          style: { fontSize: "35px", fill: "black" },
        },
      }}
      pointer={{
        type: "blob",
        animationDelay: 0,
        width: 15,
        baseColor: "white",
      }}
    />
  );
}
