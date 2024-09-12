// frontend/src/components/FlightChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FlightChart = ({ flightData }) => {
  const flightStatuses = flightData.reduce((acc, flight) => {
    acc[flight.status] = (acc[flight.status] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(flightStatuses),
    datasets: [
      {
        label: 'Number of Flights',
        data: Object.values(flightStatuses),
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Flight Status Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default FlightChart;