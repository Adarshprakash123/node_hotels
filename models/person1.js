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
        required:true
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

const person=mongoose.model('person',personschema);
module.exports=person;