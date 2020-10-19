import { verify } from 'jsonwebtoken'
import db from '../../middleware/db'
import User from '../../models/User';

db()

export const authenticated = (fn) => async (req, res) => {
   verify(req.cookies.auth,process.env.JWT_SECRET, async function(err, decoded) {
        if (!err && decoded) {
              return await fn(req,res)
        }

        res.status(401).json({message: 'Sorry you are not authenticated'})
    })
}

export default authenticated(async function getMe(req,res){
    const { email } = req.body
    const user = await User.findOne({email});
    console.log(user)
    res.status(200).json({ success: true, data: user });
})