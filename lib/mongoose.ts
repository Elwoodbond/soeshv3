import mongoose from 'mongoose';

let isConnected = false; // variable to check if connection is already established

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if (isConnected) console.log('Aleady connected to MongoDB');

    try {

    } catch (err) {

    }
};