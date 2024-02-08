import mongoose from 'mongoose';

const realEstateSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true 
    },

    password: {
        type: String, 
        required: true 
    }
})

const RealEstate = mongoose.model('realestate', realEstateSchema);
export default RealEstate;