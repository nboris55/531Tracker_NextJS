import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import { useAuth } from '../context/auth';
import Router from 'next/router'

import {faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const { user, loading } = useAuth()
   // if logged in, redirect to the dashboard
   useEffect(() => {
    if ( user ) {
      Router.replace("/dashboard");
    }
  }, [user]);

  return (
    <Fragment>
      <div className="landing"> <Navbar />
      <section id='home' className='flex items-center justify-center'>
        <div className='dark-overlay'>
          <div className='text-white text-center'>
            <h1 className=' text-6xl m-5'>531 Tracker</h1>
            <p className='text-lg'>Create a portfolio to track your 531 progression</p>
            <small className='text-base'>* Note: This is based on the 531 BBB program</small>
            <div className='mt-6'>
              <Link href='/register'>
                <a className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mr-4 focus:outline-none focus:shadow-outline'>
                  Create Account
                </a>
              </Link>
              <Link href='/login'>
                <a className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>
                  Log In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center object-bottom'>
        <FontAwesomeIcon icon={faCaretDown} size='4x' id='down-arrow'className='animate-pulse text-teal-200 object-bottom'/>
        </div>
      <section id='about'  className='flex items-center'>
      <div className='dark-overlay text-center'>
      <h1 className=' text-6xl m-5 pt-10'>Want to know more?</h1>
          <div className='text-white m-2 '>
            <div>Welcome to my rendition of the 5/3/1 workout program by Jim Wendler. Once you log in you will be prompted to create a profile with your
              one rep max's for each lift, if you don't know them, not to worry you can estimate with the calculator. Then you will have access to your dashboard,
              your progress chart and view the stats of your co-users.
            </div>        
          </div>
        </div>
      </section></div>
     
    </Fragment>
  );
}
