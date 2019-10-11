import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  {
    name: '2562/1',
    uv: 100,
    pv: 100,
    amt: 2400,
  },
  {
    name: '2562/2',
    uv: 80,
    pv: 80,
    amt: 2210,
  },
  {
    name: '2561/1',
    uv: 70,
    pv: 70,
    amt: 2290,
  },
  {
    name: '2561/2',
    uv: 60,
    pv: 60,
    amt: 2000,
  },
  {
    name: '2560/1',
    uv: 50,
    pv: 50,
    amt: 2181,
  },
  {
    name: '2560/2',
    uv: 40,
    pv: 40,
    amt: 2500,
  },
  {
    name: '2560/3',
    uv: 30,
    pv: 30,
    amt: 2100,
  },
]

export class GraphLineForVendor extends PureComponent {
  render() {
    return (
      <AreaChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    )
  }
}
