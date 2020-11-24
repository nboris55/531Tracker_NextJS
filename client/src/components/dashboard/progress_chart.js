import { Fragment, useState, useEffect } from 'react';
import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'

export default function progressChart() {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'Primary Lifts',
          data: [2710,9580,2000,1010],
          borderColor: ['rgba(239,68,68)'],
          borderWidth:2,
          fill: false,
        },
        {
          label: 'Secondary Lifts',
          data: [4000,5000,2000,6000],
          borderColor: ['rgba(167,243,208)'],
          pointBackgroundColor:['black'],
          borderWidth:2,
          fill: false,
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])
  
  return (
  <Fragment>
    <Line data={chartData} options={{
      responsive: true,
      title: {text: 'Weekly Lift Volume', display: true, fontColor:'white', fontSize: 22},
      legend: {
        display: true,
        labels: {
            fontColor: 'white',
            fontSize: 18
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              beginAtZero: true,
              fontColor: 'white'
            },
            gridLines: {
              display: true,
              color: 'white',
              zeroLineColor: 'white'
            }
          }
        ],
        xAxes:[
          {
            ticks: {
              fontColor:'white'
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    }}/>
  </Fragment>)
}
