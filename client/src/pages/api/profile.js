import db from '../../middleware/db';
import Profile from '../../models/Profile';
import User from '../../models/User';

db()

export default async (req,res ) => {
  const {id, bench, squat, overheadPress, deadlift } = req.body

   const profile = await Profile.create({
    user: id,
    bench,
    squat,
    overheadPress,
    deadlift
 });

 if (profile) {
    const user = await User.findByIdAndUpdate({_id: id},{
      profile: profile._id
    })

   res.status(200).json({success: true, data: profile})
 } else {
    res.status(200).json({success: false})
 }

}