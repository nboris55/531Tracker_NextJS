import db from '../../middleware/db';
import Profile from '../../models/Profile';
import User from '../../models/User';

db()

export default async (req,res ) => {
try {
   const users = await User.find().populate('profile', 
  'bench squat deadlift overheadPress'
 )

  res.status(200).json({success: true, data: users})
} catch (error) {
  res.status(400).json({success: false, message: 'No profiles found'})
}
 


}