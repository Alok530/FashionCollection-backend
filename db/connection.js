const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
// const mongoURL = process.env.DATABASE;
const mongoURL = 'mongodb+srv://alokrai:alok%4004021986@cluster0.pd5ss.mongodb.net/Ecommerce?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log(`connection succesfull`);
}).catch((err) => {
    console.log(`No connection ${err}`);
});