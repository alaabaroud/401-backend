const axios = require('axios');

const mongoose = require('mongoose');
const flowerSchema = new mongoose.Schema({
    instructions :{type :String},
    photo :{type :String},
    name :{type :String}
})


const flowerModel = mongoose.model('flowers',flowerSchema);


module.export = {flowerModel}
