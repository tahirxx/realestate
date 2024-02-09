import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: true 
    },

    email: {
        type: String, 
        required: true 
    },
    message: {
        type: String, 
        required: true 
    }
})

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;