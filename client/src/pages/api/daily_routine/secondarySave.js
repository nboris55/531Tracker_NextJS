import db from '../../../middleware/db';
import Profile from '../../../models/Profile';

db()

export default async (req,res ) => {
  const {_id, program, currentDay, volume, weight} = req.body

  switch (program) {
    case 'A' :
      switch (currentDay) {
        case 0 :
          try {
            const profile = await Profile.findByIdAndUpdate({_id: _id}, 
            {
             benchVolume: volume,
             latestSecondaryLift: 'Bench',
             latestSecondaryWeight: weight
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
              latestSecondaryLift: 'Squat',
              latestSecondaryWeight: weight
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
              latestSecondaryLift: 'Overhead Press',
              latestSecondaryWeight: weight
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
        case 3 :
            try {
              const profile = await Profile.findByIdAndUpdate({_id: _id}, 
              {
              deadliftVolume: volume,
              latestSecondaryLift: 'Deadlift',
              latestSecondaryWeight: weight
              }, 
              {
              new: true,
              runValidators: true,
              })
            } catch (error) {
              console.log(error)
            }
        break
      }
      case 'B' :
        switch (currentDay) {
          case 0 :
            try {
              const profile = await Profile.findByIdAndUpdate({_id: _id}, 
              {
               overheadPressVolume: volume,
               latestSecondaryLift: 'Overhead Press',
               latestSecondaryWeight: weight
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
                deadliftVolume: volume,
                latestSecondaryLift: 'Deadlift',
                latestSecondaryWeight: weight
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
                benchVolume: volume,
                latestSecondaryLift: 'Bench',
                latestSecondaryWeight: weight
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
                squatVolume: volume,
                latestSecondaryLift: 'Squat',
                latestSecondaryWeight: weight
                }, 
                {
                new: true,
                runValidators: true,
                })
              } catch (error) {
                console.log(error)
              }
          break
        }
    }

    res.status(200).json({message: 'success'})
 }
