import db from '../../middleware/db';
import Profile from '../../models/Profile';

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
   res.status(200).json({success: true, data: profile})
 }
 res.status(200).json({success: false})
}