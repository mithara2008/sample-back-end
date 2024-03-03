const express = require('express');
const app = express();
const cors = require('cors');
//const app = require('./app');
const port = 3001;
const host = 'Localhost';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://mithara:mithara2001@cluster0.9oz27vu.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MangoDB');
    }catch(error){
        console.log('MangoDB Error:',error);
    }
}

connect();

const server = app.listen(port,host,() => {
    console.log(`Node server is listnenin to ${server.address().port}`)
});

app.use('/api',router);