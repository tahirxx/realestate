import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RealEstateModel from './models/RealEstate.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/realestate", {
    useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/login', (req, res) => {
    RealEstateModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})