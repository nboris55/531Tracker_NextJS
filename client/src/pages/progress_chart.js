import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import ProgressChart from '../components/dashboard/charts/progress_chart'
import { Dashboard } from '../components/buttons/dashboardBtn';
import useUser from '../middleware/user'

export default function progressChart() {
  const {signedIn } = useUser()

  return (
    <Fragment>
      <Navbar signedIn={signedIn}/>
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left '> 
        <div>
           <h1 className='text-5xl sm:text-6xl font-bold mt-1 mb-2 sm:mb-4'>Progress Chart</h1>
        </div>
          <Dashboard />
        <ProgressChart/>
      </div>
    </Fragment>
  );
}
