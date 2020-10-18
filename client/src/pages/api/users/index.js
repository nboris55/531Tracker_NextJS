import db from '../../../../middleware/db';
import User from '../../../../models/User'

db()

export default async (req,res ) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const users = await User.find({})
                res.status(200).json({succes: true, data: users})
            } catch (error) {
                
            }

    }
}