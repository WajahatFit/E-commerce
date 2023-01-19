import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema ({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    staff: {
        type: Boolean,
    }
})

module.exports = mongoose.model('User', userSchema);