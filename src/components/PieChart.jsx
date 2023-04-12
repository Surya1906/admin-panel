import { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = () => {
  const datasets = [
    {
      id: 1,
      productName: 'Basic Tees',
      productSold: 14,
    },
    {
      id: 2,
      productName: 'Custom Short Pants',
      productSold: 31,
    },
    {
      id: 3,
      productName: 'Super Hoodies',
      productSold: 55,
    },
  ]
  const [userData, setUserData] = useState({
    labels: datasets.map((data) => data.productName),
    datasets: [
      {
        data: datasets.map((data) => data.productSold),
        backgroundColor: ['#E9A0A0', '#F6DC7D', '#98D89E'],
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  })
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }
  return <Pie data={userData} options={options} />
}

export default PieChart
