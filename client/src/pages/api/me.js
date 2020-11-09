import { verify } from 'jsonwebtoken'
import db from '../../middleware/db'
import User from '../../models/User';
import Profile from '../../models/Profile';

db()

export default async function(req,res) {
   verify(req.cookies.auth,process.env.JWT_SECRET, async function(err, decoded) {
        if (!err && decoded) {
           const id = decoded.userId
           const user = await User.findById(id, 'name').populate('profile', 
           'program bench squat deadlift overheadPress'
          );
          res.json({ success: true, data: user });
        }
    })
}



