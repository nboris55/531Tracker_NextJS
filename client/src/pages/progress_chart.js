import { Fragment, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import ProgressChart from '../components/dashboard/progress_chart'
import { Dashboard } from '../components/layout/links';
import { useAuth } from '../context/auth';
import Router from 'next/router'

export default function progressChart() {
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
       <Dashboard />
        <ProgressChart />
      </div>
    </Fragment>
  );
}
