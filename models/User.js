const mongoose =require('mongoose');

const user = mongoose.Schema( {


    name : String,
    lastname:String,
    sexe: String,

})

const User = mongoose.model('user', user);


module.exports=User;