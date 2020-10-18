import mongoose from 'mongoose'

const connection = {};

async function db() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default db;