const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

let MongoUrl = process.env.MONGO_URL

const Connection = async () => {
    
    try {
        await mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database Connected')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = Connection