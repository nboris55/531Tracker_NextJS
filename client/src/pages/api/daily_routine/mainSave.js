import db from '../../../middleware/db';
import Profile from '../../../models/Profile';

db()

export default async (req,res ) => {
  const {_id, totalDays, currentDay, currentWeek, volume, reps, weight} = req.body

  let newTotalDays = totalDays, newCurrentDay = currentDay, newCurrentWeek = currentWeek

  newTotalDays ++  
  if (currentDay < 3) { 
    newCurrentDay ++
  } else newCurrentDay = 0  
  if (currentDay == 3) newCurrentWeek ++


  switch (currentDay) {
    case 0 :
      try {
        const profile = await Profile.findByIdAndUpdate({_id: _id}, 
        {
         benchVolume: volume,
         totalDays: newTotalDays,
         currentDay: newCurrentDay,
         currentWeek: newCurrentWeek,
         latestWorkout: Date.now(),
         latestMainLift: 'Bench',
         latestReps: reps,
         latestWeight: weight,
         latestAccessoryLift: 'Lat Work'
        }, 
        {
        new: true,
        runValidators: true,
        })
      } catch (error) {
        console.log(error)
      }
    break
    case 1 :
        try {
          const profile = await Profile.findByIdAndUpdate({_id: _id}, 
          {
          squatVolume: volume,
          totalDays: newTotalDays,
          currentDay: newCurrentDay,
          currentWeek: newCurrentWeek,
          latestWorkout: Date.now(),
          latestMainLift: 'Squat',
          latestReps: reps,
          latestWeight: weight,
          latestAccessoryLift: 'Abs'
          }, 
          {
          new: true,
          runValidators: true,
          })
        } catch (error) {
          console.log(error)
        }
    break
    case 2 :
        try {
          const profile = await Profile.findByIdAndUpdate({_id: _id}, 
          {
          overheadPressVolume: volume,
          totalDays: newTotalDays,
          currentDay: newCurrentDay,
          currentWeek: newCurrentWeek,
          latestWorkout: Date.now(),
          latestMainLift: 'Overhead Press',
          latestReps: reps,
          latestWeight: weight,
          latestAccessoryLift: 'Lat Work'
          }, 
          {
          new: true,
          runValidators: true,
          })
        } catch (error) {
          console.log(error)
        }
    break
    case 3 :
        try {
          const profile = await Profile.findByIdAndUpdate({_id: _id}, 
          {
          deadliftVolume: volume,
          totalDays: newTotalDays,
          currentDay: newCurrentDay,
          currentWeek: newCurrentWeek,
          latestWorkout: Date.now(),
          latestMainLift: 'Deadlift',
          latestReps: reps,
          latestWeight: weight,
          latestAccessoryLift: 'Abs'
          }, 
          {
          new: true,
          runValidators: true,
          upsert: true
          })
        } catch (error) {
          console.log(error)
        }
    break
  }
}