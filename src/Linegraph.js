import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = () => {
    const [data, setData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://listed.free.mockoapp.net/line_chart'
                    //   'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
                );
                const { data: apiData } =   response;
                console.log(apiData);
                console.log(typeof apiData);
                // apiData.sort((a, b) => a.x - b.x);

                const labels = apiData.map((item) => item.x);

                const dataset = [
                    {
                        label: 'guest',
                        data: apiData.map((item) => item.y1),
                        fill: false,
                        borderColor: 'blue',
                    },
                    {
                        label: 'user',
                        data: apiData.map((item) => item.y2),
                        fill: false,
                        borderColor: 'red',
                    },
                    {
                        label: 'admin',
                        data: apiData.map((item) => item.y3),
                        fill: false,
                        borderColor: 'green',
                    }
                ]

                setData({ labels: labels, datasets: dataset });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const options = {
        maintainAspectRatio:false,
        plugins: {
            legend: {
              position: 'top', // Set the legend position to the right side
            },
          },
        }
    return (<div style={{height:'250px',width:'auto', padding: '0px 20px'}}> <Line data={data} options={options}  />
    </div>
    );
};

export default LineGraph;
