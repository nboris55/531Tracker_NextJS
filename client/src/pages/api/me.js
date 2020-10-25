import { verify } from 'jsonwebtoken'
import db from '../../middleware/db'
import User from '../../models/User';
import Profile from '../../models/Profile';

db()

export const authenticated = (fn) => async (req, res) => {
   verify(req.cookies.auth,process.env.JWT_SECRET, async function(err, decoded) {
        if (!err && decoded) {
           const id = decoded.userId
           return await fn(req,res, id)
        }

        res.status(401).json({message: 'Sorry you are not authenticated'})
    })
}

export default authenticated(async function getMe(req, res, id){
        const user = await User.findById(id, 'name').populate('profile', 
         'bench squat deadlift overheadPress'
        );
        res.json({ success: true, data: user });
})
