import { Fragment } from 'react';
import Navbar from '../../components/layout/Navbar';
import ProfileItem from '../../components/Profiles/ProfileItem';
import {Dashboard} from '../../components/layout/links'



export default function profiles() {
  return (
    <Fragment>
      <Navbar/>
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto text-center sm:text-left'>
        <div>
          <h1 className='text-5xl md:text-6xl font-bold'>Meet the lifters</h1>
        </div>
        <Dashboard />
        {/* {users.length > 0 ? (
              users.map(user => <ProfileItem key={user._id} user={user} />)
            ) : (
              <h4>No users found</h4>
            )} */}
      </div>
    </Fragment>
  );
}