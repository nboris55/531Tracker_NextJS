import db from '../../middleware/db';
import Profile from '../../models/Profile';
import User from '../../models/User';

db()

export default async (req,res ) => {
  const {id, program, bench, squat, overheadPress, deadlift } = req.body
  const user = await User.findById({_id: id})
  if (user.profile) {
   const profile = await Profile.findByIdAndUpdate({_id: user.profile}, req.body, {
    new: true,
    runValidators: true,
   })
   res.status(200).json({success: true, message: 'Profile updated', data: user})
  } else {
   const profile = await Profile.create({
    user: id,
    program,
    bench,
    squat,
    overheadPress,
    deadlift
  });

  const user = await User.findByIdAndUpdate({_id: id},{
    profile: profile._id
    })
 

  res.status(200).json({success: true, message: 'New profile created', data: user.profile})
  }

}