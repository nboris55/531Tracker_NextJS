import { Fragment, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import DailyRoutine from '../components/dashboard/daily_routine'
import DailySecondary from '../components/dashboard/dailySecondary'
import { Dashboard } from '../components/layout/links'
import Router from 'next/router'
import { useAuth } from '../context/auth';
import { calcDailyRoutine } from '../middleware/calculations';

export default function dailyRoutine() {
  const { user, loading } = useAuth()
   // if logged in, redirect to the dashboard
   useEffect(() => {
    if (!loading && !user) {
      Router.replace("/");
    }
  }, [user]);

  
  let profile

  if (!loading && user) {
    profile = user.profile
    calcDailyRoutine(profile)
  }

  
  
  return (
    <Fragment>
      <Navbar />
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center sm:text-left'> 
        <div>
          <h1 className='text-5xl md:text-6xl font-bold mb-2 sm:mb-4 '>Daily Routine</h1>
        </div>
        <div className='text-center sm:text-left'>
        <Dashboard />
        </div>
        <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center'>
          <DailyRoutine lift='Overhead Press' order='1' />
          <DailySecondary lift='Bench Press' order='2'/>
          <DailySecondary lift='Rows' order='3'/>
        </div>
       
      </div>
    </Fragment>
  );
}
