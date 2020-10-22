import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import ProgressChart from '../components/dashboard/progress_chart'
import { Dashboard } from '../components/layout/links';
import getUser from '../middleware/auth'

progressChart.getInitialProps = async (ctx) => {
  const user = await getUser('http://localhost:3000/api/me', ctx)
  if (!user) {
    return {};
  }
  return {user : user.user}

}


export default function progressChart(loggedIn) {
  return (
    <Fragment>
      <Navbar loggedIn={loggedIn}/>
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
