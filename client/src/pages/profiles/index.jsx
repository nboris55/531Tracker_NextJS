import { Fragment, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import ProfileItem from '../../components/Profiles/ProfileItem';
import {Dashboard} from '../../components/layout/links'
import useSWR from 'swr'
import { useAuth } from '../../context/auth';
import Router from 'next/router'

export default function profiles() {
 const { user, loading } = useAuth()
 // if logged in, redirect to the dashboard
 useEffect(() => {
  if (!loading && !user) {
    Router.replace("/");
  }
}, [user]);

 const { data } = useSWR('http://localhost:3000/api/profiles')
 let person

 if (data) {
   person = data.data
 }
 
  return (
    <Fragment>
      {!data ? ('Loading...') : (<Fragment> <Navbar/>
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left'>
        <div>
          <h1 className='text-5xl md:text-6xl font-bold'>Meet the lifters</h1>
        </div>
        <Dashboard />
        {person.length > 0 ? (
              person.map(user => <ProfileItem key={user._id} user={user} />)
            ) : (
              <h4>No users found</h4>
            )}
      </div>
      </Fragment>)}
    </Fragment>
  );
}