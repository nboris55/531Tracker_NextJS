import db from '../../middleware/db';
import User from '../../models/User';
import sendEmail from '../../utilities/sendEmail'

db()

export default async (req,res ) => {
  const user = await User.findOne({email: req.body.email})
  if (!user) {
    console.log('No user with that email')
  }
  const resetToken = user.getResetPasswordToken()
  await user.save({validateBeforeSave: false})
  // Create reset url
  const resetUrl = `https://${req.headers.host}/newpassword/${resetToken}`
  const message = `You have asked to recieve this email because you (or someone else) has requested the reset of a password. 
  Please follow this link: \n\n ${resetUrl}`
  try {
    await sendEmail({
      email: user.email,
      subject: 'Password reset token for 531 Tracker',
      message
    })
    await user.save({validateBeforeSave: false})
    res.status(200).json({success: true, data: 'Email has been sent'})
  } catch (err) {
    console.log(err)
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({validateBeforeSave: false})
  }
}