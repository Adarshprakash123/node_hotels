// const mongoose=require('mongoose');
// const mongoUrl='mongodb://localhost:27017/hostels'

// mongoose.connect(mongoUrl, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// // get the default connection
// // mongoose maintains a default connection object representing the mongodb conn
// const db=mongoose.connection;
// // defninig event listener for database connection
// db.on('connected',()=>{
//     console.log('connected to mongodb server');
// })

// db.on('error',(err)=>{
//     console.log('connected to mongodb server',err);
// })

// db.on('disconnected',()=>{
//     console.log('disconnected to mongodb server');
// })

// // ab hme exports karke server file pe run karrrwana hoga
// // exporting the database connection
// module.exports=db;