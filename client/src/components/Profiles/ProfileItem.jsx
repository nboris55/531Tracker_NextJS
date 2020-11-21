import { Fragment } from 'react';


export default function ProfileItem({user}) {
  console.log(user)
  return (
     <Fragment>
      <div className='rounded-md border-2 mt-5 p-2'>
        <h1 className='text-4xl text-center text-teal-200'>{user.name}</h1>
        {user.profile ? (
          <div className='flex flex-row justify-around'>
            <div> 
              <h1 className='text-3xl'>Rep Maxs: </h1>
              <ul className='p-2 mb-2'>
                <li>Bench: {user.profile.bench}</li>
                <li>Squat: {user.profile.squat}</li>
                <li>OHP: {user.profile.overheadPress}</li>
                <li>Deadlift: {user.profile.deadlift}</li>
              </ul>
            </div>
            <div>
            <h1 className='text-3xl'>Latest Totals: </h1>
              <ul className='p-2 mb-2'>
                <li>Bench Volume: 2400 lbs</li>
                <li>Squat Volume: 2400 lbs</li>
                <li>OHP Volume: 2400 lbs</li>
                <li>Deadlift Volume: 2400 lbs</li>
              </ul>
            </div>
            </div>
            ) : (
              <h4 className='text-center mt-3 mb-2'>{user.name} has not started his swole journey yet!</h4>
            )}
      </div>
    </Fragment>
  );
}
