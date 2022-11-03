import mongoose from 'mongoose'

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

const JobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please provide a title for this job'],
        maxlength: [255, 'Title cannot be more than 255 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for this job'],
    },
    work_day: {
        type: String,
        required: [true, 'Please provide a work_day'],
        enum: ['Full-Time', 'Part-Time'],
        default: 'Full-Time'
    },
    area: {
        type: String,
        required: [true, 'Please provide an area']
    },
    location: {
        type: String,
        required: [true, 'Please provide a location']
    },
    tasks: {
        type: String,
        required: false,
        default: ''
    },
    looking_for: {
        type: String,
        required: false,
        default: ''
    },
    offer: {
        type: String,
        required: false,
        default: ''
    },
    publish: {
        type: Boolean,
        required: true,
        default: true
    }
}, options)

export default mongoose.models.Job || mongoose.model('Job', JobSchema)