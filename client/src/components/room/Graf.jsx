import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { GrafColorHelper } from "./GrafColorHelper";

export default function Graf({ temperatureData, RoomData }) {
  return (
    <ResponsiveContainer>
      <BarChart
        data={temperatureData.map((entry) => ({
          name: new Date(entry.timeStamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          Temperature: entry.lastKnownTemperature,
        }))}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ lineHeight: "40px" }}
          payload={[
            { value: "Low", color: "#8884d8" },
            { value: "Normal", color: "#82ca9d" },
            { value: "High", color: "#ffc658" },
            { value: "Dangerous", color: "#ea4228" },
          ]}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#5bd887" />
        <Bar
          dataKey="Temperature"
          name="Temperature"
          fill="#8884d8"
          unit={"°C"}
        >
          {temperatureData?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={GrafColorHelper(RoomData, temperatureData[index])}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
