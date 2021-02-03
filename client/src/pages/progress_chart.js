import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import ProgressChart from '../components/dashboard/charts/progress_chart'
import { Dashboard } from '../components/buttons/dashboardBtn';

export default function progressChart() {
  let profile, loading = true

  if (!loading && user) {
    profile = user.profile
  }

  return (
    <Fragment>
      <Navbar/>
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left '> 
        <div>
           <h1 className='text-5xl sm:text-6xl font-bold mt-1 mb-2 sm:mb-4'>Progress Chart</h1>
        </div>
          <Dashboard />
        <ProgressChart profile={profile}/>
      </div>
    </Fragment>
  );
}
