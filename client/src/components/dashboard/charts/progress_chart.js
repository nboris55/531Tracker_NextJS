import { Fragment, useState, useEffect } from 'react';
import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'
import useUser from '../../../middleware/user'


export default function progressChart() {
  const { data, signedIn, isError } = useUser()
  const [chartData, setChartData] = useState({})

  let profile, liftProfile, program, bench, squat,overheadPress, deadlift, id;
  if (!isError && data) {
    profile = data.profile
    id = profile._id
    liftProfile = profile.profile
    if (liftProfile) {
    program = liftProfile.program
    bench = liftProfile.bench
    squat = liftProfile.squat
    overheadPress = liftProfile.overheadPress
    deadlift = liftProfile.deadlift
    }
  }

  const chart = () => {
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
