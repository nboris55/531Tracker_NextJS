import db from '../../../middleware/db';
import Profile from '../../../models/Profile';

db()

export default async (req,res ) => {
  const {_id, program, currentDay, volume} = req.body

  switch (program) {
    case 'A' :
      switch (currentDay) {
        case 0 :
          try {
            const profile = await Profile.findByIdAndUpdate({_id: _id}, 
            {
             benchVolume: req.body.benchVolume + volume,
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
              squatVolume: req.body.squatVolume + volume,
              }, 
              {
              new: true,
              runValidators: true,
              })
              console.log(profile)
            } catch (error) {
              console.log(error)
            }
        break
        case 2 :
            try {
              const profile = await Profile.findByIdAndUpdate({_id: _id}, 
              {
              overheadPressVolume: volume,
              }, 
              {
              new: true,
              runValidators: true,
              })
              console.log(profile)
            } catch (error) {
              console.log(error)
            }
        break
        case 3 :
            try {
              const profile = await Profile.findByIdAndUpdate({_id: _id}, 
              {
              deadliftVolume: volume,
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
               overheadPressVolume: req.body.overheadPressVolume + volume,
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
                deadliftVolume: req.body.deadliftVolume + volume,
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
