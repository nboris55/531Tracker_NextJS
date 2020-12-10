import { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ProgressChart from '../components/dashboard/charts/progress_chart'
import TotalVolumeChart from '../components/dashboard/charts/total_volume'
import { Dashboard } from '../components/buttons/dashboardBtn';
import { useAuth } from '../context/auth';
import Router from 'next/router'

export default function progressChart() {
  const [totVolChart, setTotVolChart] = useState(true)
  const [progChart, setProgChart] = useState(false)

  const {user, loading} = useAuth()
   // if logged in, redirect to the dashboard
   useEffect(() => {
    if (!loading && !user) {
      Router.replace("/");
    }
  }, [user]);

  return (
    <Fragment>
      <Navbar/>
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left '> 
        <div>
           <h1 className='text-5xl sm:text-6xl font-bold mt-1 mb-2 sm:mb-4'>Progress Chart</h1>
        </div>
        <div className="flex flex-row space-x-3">
          <Dashboard />
          <button 
            className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'

            >
                Total Volume Chart
          </button>
          <button 
            className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'
     
            >
                Progress Chart
          </button>
        </div>
        {totVolChart ? (<TotalVolumeChart />) : ('Please Select a chart to view')}    
        {progChart ? (<ProgressChart />) : ('')}    
      </div>
    </Fragment>
  );
}
