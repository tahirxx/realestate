import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import realEstateModel from './models/RealEstate.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/realestate");

app.get('/register', (req, res) => {
    // You can send a response, render a page, or handle the request in any way you want
    res.send('GET request to /register');
}); 

//login information send/posting it 
app.post('/login', async (req, res) => {
    const{email, password} = req.body

    try {
        const check=await realEstateModel.findOne({ email })

        if(check){
            res.json('exist')
        } else{
            const newUser = new realEstateModel({
                email,
                password
            });

            // Save the new user to the database
            await newUser.save();
            res.json('notexist')
        }
    } catch (err){
        res.json('error')
    }
})

//register info sending/posting
app.post('/register', async (req, res) => {
    const{email, password} = req.body

    const data = {
        email: email, 
        password: password
    }

    try {
        const check=await realEstateModel.findOne({email:email})

        if(check){
            res.json('exist')
        } else{
            res.json('notexist')
            await realEstateModel.insertMany([data])
        }
    } catch (err){
        res.json('notexist')
    }
})

app.listen(8000, () => {
    console.log("server is running")
})