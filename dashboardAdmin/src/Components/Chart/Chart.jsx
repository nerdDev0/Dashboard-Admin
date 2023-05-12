import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import './Chart.css'
export default function Chart({ title, data, dataKy, grid }) {
  return (
    <>
      <article className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer  aspect={4}>
          <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={data}>
            <XAxis dataKey="name" stroke="#5550BD" />
            <Line type='monotone' dataKey={dataKy} stroke="#5550BD" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
          </LineChart>
        </ResponsiveContainer>
      </article>
    </>
  );
}
