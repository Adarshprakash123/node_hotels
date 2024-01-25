const mongoose=require('mongoose');
const mongourl='mongodb://localhost:27017/kitchen'

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected');
})

db.on('error',(err)=>{
    console.log('error',err);
})

db.on('disconnected',()=>{
    console.log('disconnected');
})

module.exports=db;