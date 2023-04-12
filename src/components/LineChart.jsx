import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = () => {
  const datasets = [
    {
      id: 1,
      year: 2016,
      userGain: 970,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 456,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 788,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 900,
      userLost: 455,
    },
    {
      id: 5,
      year: 2020,
      userGain: 430,
      userLost: 234,
    },
  ]
  const [userData, setUserData] = useState({
    labels: datasets.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: datasets.map((data) => data.userGain),
        backgroundColor: ['#E9A0A0'],
        borderColor: '#E9A0A0',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 0,
        lineTension: 0.4,
      },
      {
        label: 'Users Lost',
        data: datasets.map((data) => data.userLost),
        backgroundColor: ['#9BDD7C'],
        borderColor: '#9BDD7C',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 0,
        lineTension: 0.3,
      },
    ],
  })
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 4.36,
    scales: {
      x: {
        drawBorder: false,
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
        },
      },
      y: {
        grid: {
          color: '#EAEAEA',
          lineWidth: 1,
          drawBorder: false,
        },
      },
    },
  }
  return <Line data={userData} options={options} />
}

export default LineChart
