// src/ChartComponent.js
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register chart.js components

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow height to be customized
    plugins: {
        title: {
            display: true,
            color: 'white', // Title color
            font: {
                size: 18,
            },
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `Value: ${context.raw}`;
                },
            },
        },
    },
    scales: {
        x: {
            grid: {
                drawBorder: true, // Draw axis border
                drawOnChartArea: true, // Draw grid lines
                drawTicks: true, // Draw tick marks
                color: '#383838', // Set grid line color to white
            },
            ticks: {
                color: '#383838', // Set tick label color to white
            },
            title: {
                display: true,
                text: 'Comments', // Label for the x-axis
                color: 'white', // Title color
                font: {
                    size: 14,
                },
            },
        },
        y: {
            grid: {
                drawBorder: true, // Draw axis border
                drawOnChartArea: true, // Draw grid lines
                drawTicks: true, // Draw tick marks
                color: '#383838', // Set grid line color to white
            },
            ticks: {
                color: '#383838', // Set tick label color to white
            },
            title: {
                display: true,
                color: '#383838', // Title color
            
            },
            beginAtZero: true, // Ensure y-axis starts from zero
        },
    },
};

const ChartComponent = ({ data }) => {
    return <div className='barBox'>
        <div style={{'marginLeft':'15px','fontSize':"25px"}}>Comment Distribution</div>
        <Bar data={{
            labels: data.monthlyData.map((d) => d.month),
            datasets: [
                {
                    data: data.monthlyData.map((d) => d.count),
                    backgroundColor: 'rgb(134, 106, 236)',
                },
            ],
        }} options={options} />

    </div>
};

export default ChartComponent;
