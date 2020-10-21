import db from '../../middleware/db';
import Profile from '../../models/Profile';

db()

export default async (req,res ) => {
    const { method } = req;

    switch(method) {
        // case 'GET':
        //     try {
        //         const users = await User.findOne({})
        //         res.status(200).json({succes: true, data: users})
        //     } catch (error) {
        //         res.status(400).json({succes: false})
        //     }
        //     break;
        case 'POST':
            try {
                req.body.user = req.user.id;
                const profile = await Profile.create(req.body)
                res.status(201).json({succes: true, data: profile})
            } catch (error) {
                res.status(400).json({succes: false, message: error})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }
}