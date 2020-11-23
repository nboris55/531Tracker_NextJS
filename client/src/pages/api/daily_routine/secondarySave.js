import db from '../../../middleware/db';
import Profile from '../../../models/Profile';

db()

export default async (req,res ) => {
  const {_id, program, currentDay, currentWeek, volume} = req.body

}