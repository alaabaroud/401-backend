const axios = require('axios');
const {flowerModel } = require ('../model/flowerSchema')

const getFlowers=(req,res) =>
{
    const url= 'https://flowers-api-13.herokuapp.com/getFlowers'
    axios
    .get(url)
    .then (flowers => res.send(flowers.data.flowerslist))
    .catch (err=>res.send(err));
    // console.log(flowers.data.flowerslist);
} 

const postFlowers = (req,res) => {
    const {photo, name, instructions} = req.body;
    console.log(photo, name, instructions);
    const newFlower = new flowerModel({
        photo : photo,
        name: name,
        instructions: instructions,
    })
    newFlower.save
}
const getFavFlowers = (req,res) => {
    flowerModel.find ({}, (error, data) => {
if (error) {
    res.send (error);
}else {
    res,send (data)
}
    })
  
}
const deleteFlower = (req,res) => {
    const {id} = req.params
    flowerModel.deleteOne( {_id:id } , (error,data)=>{

    })
    flowerModel.find ({}, (error, data)=>{
        res.send(data)
    })
}



module.exports={getFlowers,postFlowers, getFavFlowers, deleteFlower,updateFlowers}