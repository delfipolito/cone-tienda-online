import mongoose from 'mongoose'
import { isEmail } from 'validator';

function omitPrivate(doc, obj) {
    delete obj.__v;
    return obj;
}

// schema options
var options = {
    toJSON: {
        transform: omitPrivate
    },
    timestamps: true
};

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    firstname: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [255]
    },
    lastname: {
        type: String,
        required: [true, 'Please provide a lastname'],
        maxlength: [255]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Please provide an email'],
        validate: [isEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    }
}, options)
export default mongoose.models.User || mongoose.model('User', UserSchema)