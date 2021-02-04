import db from '../../middleware/db'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

db()

export default async (req,res) => {
    const { name, email, password } = req.body
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).json({success: false, message: 'User already exists!'})
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if (newUser) {
      const token =  jwt.sign({userId: newUser._id},process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        })
      res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: process.env.JWT_COOKIE_EXPIRE,
          path:'/'
      })) 
      res.status(201).json({success: true, data: user})
    } else {
        res.status(400).json({success: false, message: 'Invalid email or password'}) 
    }
}