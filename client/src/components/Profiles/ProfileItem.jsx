import { Fragment } from 'react';


export default function ProfileItem({user}) {
  return (
     <Fragment>
      <div className='rounded-md border-2 mt-5 p-2'>
        <h1 className='text-4xl'>Name: {user.name}</h1>
        {user.profile ? (
          <div>
              <h1 className='text-3xl'>Lifts: </h1>
              <ul className='p-2 mb-2'>
                <li>Bench: {user.profile.bench}</li>
                <li>Squat: {user.profile.squat}</li>
                <li>Overhead Press: {user.profile.overheadPress}</li>
                <li>Deadlift: {user.profile.deadlift}</li>
              </ul>
            </div>
            ) : (
              <h4>No lift profile found</h4>
            )}
      </div>
    </Fragment>
  );
}
