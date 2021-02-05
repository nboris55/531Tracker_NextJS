import db from '../../middleware/db';
import User from '../../models/User';
import sendEmail from '../../utilities/sendEmail'

db()

export default async (req,res ) => {
  console.log(req.headers.host)
  const user = await User.findOne({email: req.body.email})
  if (!user) {
    console.log('No user with that email')
  }

  const resetToken = user.getResetPasswordToken()

  // Create reset url
  const resetUrl = `${req.protocol}://localhost:3000/api/newpassword/${resetToken}`

  const message = `You have asked to recieve this email because you (or someone else) has requested the reset of a password. 
  Please follow this link: \n\n ${resetUrl}`

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password reset token for 531 Tracker',
      message
    })
    res.status(200).json({success: true, data: 'Email has been sent'})
  } catch (err) {
    console.log(err)
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save({validateBeforeSave: false})
  }

  
  await user.save({validateBeforeSave: false})
  res.status(200).json({
    success: true,
    data: user
  })
}