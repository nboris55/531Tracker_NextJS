import { Fragment, useState, useEffect } from 'react';
import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'


export default function progressChart({profile}) {
  const [chartData, setChartData] = useState({})
  let bench, squat, overheadPress, deadlift
  if (profile) {
    bench = profile.bench
    squat = profile.squat
    overheadPress = profile.overheadPress
    deadlift = profile.deadlift

  }
  console.log(bench, squat)

  const chart = (bench, squat, overheadPress, deadlift) => {
    setChartData({
      labels: ['Bench', 'Squat', 'Overhead Press', 'Deadlift'],
      datasets: [
        {
          label: 'Primary Lifts',
          data: [bench, squat, overheadPress, deadlift],
          borderColor: ['rgba(239,68,68)'],
          borderWidth:2,
          fill: false,
        },
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
      title: {text: 'Current One Rep Maxes', display: true, fontColor:'white', fontSize: 22},
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
