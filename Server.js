const dotenv= require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./models/User');

const app = express();




app.use(express.json());



app.post('/user',(req,res)=>{
      
  const   name= req.body.name;
    const  lastname= req.body.lastname;
    const  sexe= req.body.sexe

  User.create({

    name, lastname, sexe
  });


})

app.get('/user',(req,res)=>{


  User.find({}).then(doc => res.send(doc))

  


})

app.put('/user',(req,res)=>{
       
    const id= req.body.id;
    const name =req.body.name;

    User.findByIdAndUpdate({_id:id},{name: name}).then(console.log("updated")).catch(err =>{console.log("error")})
})

app.delete('/user',(req,res)=>{
     
      const id = req.body.id;

      User.findByIdAndDelete({_id:id}).then(

        console.log('delete').catch(err =>{console.log("error")})
      )

})



app.listen(3001,() =>{

    console.log('We are connected')
})