import { Fragment, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import DailyMain from '../components/dashboard/daily_routines/dailyMain'
import DailySecondary from '../components/dashboard/daily_routines/dailySecondary'
import DailyAccessory from '../components/dashboard/daily_routines/dailyAccessory'
import { Dashboard } from '../components/buttons/dashboardBtn'
import { useAuth } from '../context/auth';
import Router from 'next/router'

export default function dailyRoutine() {
  const { user, loading } = useAuth()
  
  let profile

  if (!loading && user) {
    profile = user.profile
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
          <DailyMain profile={profile}/>
          <DailySecondary profile={profile}/>
          <DailyAccessory profile={profile}/>
        </div>
       
      </div>
    </Fragment>
  );
}
