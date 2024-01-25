const mongoose=require('mongoose');
const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true // means mandatory
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})
// ab hmko schema se model banana hoga
// ab usi model ko use karke jitna db operation hai wo perform karenge
// like CRUD

// create person model
const Person=mongoose.model('Person',personschema);
module.exports=Person;