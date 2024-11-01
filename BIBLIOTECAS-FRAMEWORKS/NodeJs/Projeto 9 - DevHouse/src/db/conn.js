import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    try {
         await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@devhouse.jfyux.mongodb.net/?retryWrites=true&w=majority&appName=DevHouse`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
         })
        console.log('Conectou com Mongoose!')
    } catch (error) {
        console.log('Error:', error);
    }
}

export default main;