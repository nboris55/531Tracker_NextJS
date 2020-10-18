import { Fragment } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';

export default function Home() {
  return (
    <Fragment>
      <Navbar />{' '}
      <section className='flex items-center justify-center h-screen overlay landing'>
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
    </Fragment>
  );
}
