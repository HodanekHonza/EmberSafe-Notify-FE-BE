import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Brush, Bar } from 'recharts';

const data = [
  { name: '1', pv: 456 },
  { name: '2', pv: 230 },
  { name: '3', pv: 345 },
  { name: '4', pv: 450 },
  { name: '5', pv: 321 },
  { name: '6', pv: 235 },
  { name: '7', pv: 267 },
  { name: '8', pv: 378 },
  { name: '9', pv: 210 },
  { name: '10', pv: 23 },
  { name: '12', pv: 45 },
  { name: '13', pv: 90 },
  { name: '14', pv: 130 },
];

function Graf() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Graf;
