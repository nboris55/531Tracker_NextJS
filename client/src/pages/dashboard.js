import { Fragment, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import GlanceTable from '../components/dashboard/Table';
import Link from 'next/link'
import { useAuth } from '../context/auth';
import Router from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function dashboard() {
  const { user, loading } = useAuth()
 
   // if not logged in redirect to homepage
   useEffect(() => {
    if ( !user) {
      Router.replace("/");
    }
  }, [user]);

  let name, profile, showTable

  if (!loading && user) {
    name = user.name
    profile = user.profile
  }

  if (profile) showTable = true

  return (
    <Fragment>
      {loading ? ('Loading ...') : (<Fragment>  <Navbar />
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left'>
        <div>
          <h1 className='text-5xl md:text-6xl font-bold'>Dashboard</h1>
        </div>
        <div>
      <h1 className='text-4xl mb-2 md:mb-4'>Welcome {name}</h1>
        </div>
        {!showTable ? <Fragment>
          <p className='text-2xl mb-3 text-teal-200'>You have not setup a profile yet.</p>
          <Link href='/edit_profile'>
          <a className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'>
              Create One
            </a>
          </Link>
        </Fragment> : <Fragment>
        <div className='text-center sm:text-left sm:space-x-3'>
          <Link href='/daily_routine'>
            <a className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'>
              Daily Routine
            </a>
          </Link>
        <Link href='/progress_chart'>
            <a className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'>
              Progress Chart
            </a>
          </Link>
        <Link href='/edit_profile'>
            <a className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'>
              Edit Profile
            </a>
          </Link>
        </div>
          <div>
           <h1 className='text-3xl mt-10 mb-2'>Week at a glance</h1>
        </div>
        <GlanceTable profile={profile}/>
        </Fragment> }
        
      </div> 
    </Fragment>)}
    </Fragment>
  );
}

export default (dashboard)