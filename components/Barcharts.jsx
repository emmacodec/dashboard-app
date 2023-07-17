import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Barcharts = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

const [chartOptions, setChartOptions] = useState({});

useEffect(() =>{
    setChartData({
        labels: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
        datasets: [
            {
                label: 'sales $',
                data: [19234, 22023, 19490, 19738, 24182, 47522],
                borderColor: 'rgba(53, 162, 253)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)',
            },
        ]
    })

    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'DailyRevenue',
            },
            
        },

        maintainAspectRatio: false,
        responsive: true
    })
}, [])

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions} />
        </div>
    </>
  )
}

export default Barcharts;
