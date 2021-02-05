import { Fragment } from 'react';

export default function ProfileItem({user}) {
  let bench,
  squat,
  overheadPress,
  deadlift,
  latestWorkout,
  latestMainLift, 
  latestSecondaryLift,
  latestAccessoryLift,
  latestReps, 
  latestWeight,
  latestSecondaryWeight

  if (user.profile) {
    bench = user.profile.bench
    squat = user.profile.squat
    overheadPress = user.profile.overheadPress
    deadlift = user.profile.deadlift
    latestWorkout = user.profile.latestWorkout
    latestMainLift = user.profile.latestMainLift
    latestSecondaryLift = user.profile.latestSecondaryLift
    latestAccessoryLift = user.profile.latestAccessoryLift
    latestReps = user.profile.latestReps
    latestWeight = user.profile.latestWeight
    latestSecondaryWeight = user.profile.latestSecondaryWeight
  }
  return (
     <Fragment>
      <div className='rounded-md border-2 mt-5 p-2'>
        <h1 className='text-4xl text-center text-teal-200'>{user.name}</h1>
        {user.profile ? (
          <div className='flex flex-row justify-around'>
            <div> 
              <h1 className='text-3xl'>Rep Maxs: </h1>
              <ul className='p-2 mb-2'>
                <li>Bench: {bench}</li>
                <li>Squat: {squat}</li>
                <li>OHP: {overheadPress}</li>
                <li>Deadlift: {deadlift}</li>
              </ul>
            </div>
            <div>
            <h1 className='text-3xl'>Latest Workout: </h1>
            {latestWorkout ? ( <ul className='p-2 mb-2'>
                <li>Day: {latestWorkout}</li>
                <li>Main Lift: {latestMainLift} - {latestWeight} lbs x {latestReps} reps</li>
                <li>Secondary Lift: {latestSecondaryLift} - {latestSecondaryWeight} lbs x 10 reps </li>
                <li>Accessory: {latestAccessoryLift}</li>
              </ul>) : ('Has not begun the swole journey')}
             
            </div>
            </div>
            ) : (
              <h4 className='text-center mt-3 mb-2'>{user.name} has not started his swole journey yet!</h4>
            )}
      </div>
    </Fragment>
  );
}
