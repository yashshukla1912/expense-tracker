const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1);
    }
}

module.exports = connectDb; 