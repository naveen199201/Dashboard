import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['shirts' ,'Trousers', 'caps'],
    datasets: [
      {
        label: '# of items',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true, // Allow the chart to be responsive and adjust its size
    maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
    plugins: {
        legend: {
          position: 'right', // Set the legend position to the right side
        },
      },
    // Customize other chart options as needed
  };

  return (
    <div style={{ width: '300px', height: '250px',margin:'auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
