import { Fragment } from "react";
import Navbar from '../components/layout/Navbar'
import EditProfile from '../components/dashboard/edit_profile'
import { Dashboard } from '../components/layout/links'
import Link from 'next/link'

export default function editProfile() {
  return (
    <Fragment>
      <Navbar />
       <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto">
        <div>
          <h1 className='text-5xl sm:text-6xl font-bold mb-2 sm:mb-4 text-center sm:text-left'>Profile</h1>
        </div>
        <Dashboard />
      <EditProfile />
    </div>   
    </Fragment>
  )
}
