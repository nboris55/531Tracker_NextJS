import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import DailyRoutine from '../components/dashboard/daily_routine'
import { Dashboard } from '../components/layout/links'
import getUser from '../middleware/auth';

dailyRoutine.getInitialProps = async (ctx) => {
  const user = await getUser('http://localhost:3000/api/me', ctx)
  if (!user) {
    return {};
  }
  return {user : user.user}
}

export default function dailyRoutine(loggedIn) {
  return (
    <Fragment>
      <Navbar loggedIn={loggedIn}/>
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center sm:text-left'> 
        <div>
          <h1 className='text-5xl md:text-6xl font-bold mb-2 sm:mb-4 '>Daily Routine</h1>
        </div>
        <div className='text-center sm:text-left'>
        <Dashboard />
        </div>
        <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center'> <DailyRoutine lift='Deadlift' order='1' />
        <DailyRoutine lift='Squat' order='2'/>
        <DailyRoutine lift='Abs' order='3'/></div>
       
      </div>
    </Fragment>
  );
}
