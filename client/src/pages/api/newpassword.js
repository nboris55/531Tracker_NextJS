import db from '../../middleware/db';
import User from '../../models/User';
import bcrypt from 'bcrypt'

db()

export default async (req,res ) => {
    const user = await User.findOne({
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now()}
    })
    if (!user) {
        return res.status(400).json({success: false, message: 'Invalid reset token'})
    }

    const hashedPassword = await bcrypt.hash(req.body.password,12);

    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({validateBeforeSave: false})

    res.status(200).json({success: true, data: 'Password has been changed'})
 
}