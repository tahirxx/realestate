import mongoose from 'mongoose';

const RealEstateSchema = new mongoose.Schema({
    email: String, 
    password: String
})

const RealEstateModel = mongoose.model('realestate', RealEstateSchema);
export default RealEstateModel;