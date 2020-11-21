import { verify } from 'jsonwebtoken'
import db from '../../middleware/db'
import User from '../../models/User';
import Profile from '../../models/Profile';

db()

export default async function(req,res) {
   verify(req.cookies.auth,process.env.JWT_SECRET, async function(err, decoded) {
        if (!err && decoded) {
           const id = decoded.userId
           try {
              const data = await User.findById(id, 'name').populate('profile');
              const user = await data
              res.status(200).json({ success: true, data: user });
           } catch (error) {
              res.status(400).json({ success: false, error: error });
           }
           
        }
    })
}


