import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import DailyMain from '../components/dashboard/daily_routines/dailyMain'
import DailySecondary from '../components/dashboard/daily_routines/dailySecondary'
import DailyAccessory from '../components/dashboard/daily_routines/dailyAccessory'
import { Dashboard } from '../components/buttons/dashboardBtn'
import useUser from '../middleware/user'

export default function dailyRoutine() {
  const { data, signedIn, isError } = useUser()

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const { profile} = data
  const liftProfile = profile.profile

  return (
    <Fragment>
      <Navbar signedIn={signedIn}/>
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center sm:text-left'> 
        <div>
          <h1 className='text-5xl md:text-6xl font-bold mb-2 sm:mb-4 '>Daily Routine</h1>
        </div>
        <div className='text-center sm:text-left'>
        <Dashboard />
        </div>
        <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center'>
          <DailyMain profile={liftProfile}/>
          <DailySecondary profile={liftProfile}/>
          <DailyAccessory profile={liftProfile}/>
        </div>
       
      </div>
    </Fragment>
  );
}
