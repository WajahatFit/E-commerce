import mongoose from "mongoose";

const connectDb = async () => {
    mongoose.connect(process.env.MONGODB_URI!, {
        // this are just impostation to make more secure the connection and can be needed in older browsers
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    console.log("MongoDB connected ... ")
}

export default connectDb;