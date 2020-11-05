import db from '../../middleware/db'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

db()

export default async (req,res) => {
    const { email, password } = req.body
    if (req.method === 'POST') { 
        const user = await User.findOne({email}).select('+password');
    if (!user) {
        return res.status(400).json({success: false, message: 'Invalid email or password'})
    } 
    const match = await bcrypt.compare(password, user.password)
    if (match) {
      const token =  jwt.sign({userId: user._id},process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        })
      res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
          httpOnly: false,
          sameSite: 'strict',
          maxAge: process.env.JWT_COOKIE_EXPIRE,
          path:'/'
      })) 
      
      res.status(200).json({success: true})
    } else {
        res.status(400).json({success: false, message: 'Invalid email or password'}) 
    }
} else {
    res.status(400).json({success:false, message:'Only accepts POST requests'})
}
   
}