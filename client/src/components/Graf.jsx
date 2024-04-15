import React from 'react';
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
} from 'recharts';
import { CurTempInfoHistory } from './componentsFunction/GrafFunction';



export default function Graf ({TemperatureHistory, RoomData}){
    return (
      <ResponsiveContainer width="100%" height="100%">
        
        <BarChart
          width={600}
          height={300}
          data={TemperatureHistory}
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
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#5bd887" />
          <Bar dataKey="Temperature" name="Temperature" fill="#8884d8" unit={"°C"}>
            {
              TemperatureHistory.map((entry, index)=>
              (
                <Cell key={`cell-${index}`} fill={CurTempInfoHistory(RoomData, TemperatureHistory[index])}/>
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
}