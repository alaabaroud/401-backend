const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const mongoose = require('mongoose');
const PORT =process.env.PORT ||4000

const {getFlowers,postFlowers,getFavFlowers,deleteFlower,updateFlowers } =require('./controller/Flowers')
mongoose.connect('mongodb://localhost:27017/flowers', {useNewUrlParser: true, useUnifiedTopology: true});



server.get ('/getFlowers', getFlowers)
server.post ('/postFlowers', postFlowers)
server.get ('/getFavFlowers', getFavFlowers)
server.delete ('/deleteFlower', deleteFlower)
server.put ('/updateFlowers', updateFlowers)


server.listen(PORT,() => {console.log(` listening to port ${PORT}`)})