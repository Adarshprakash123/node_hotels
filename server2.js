const express=require('express');
const app=express();
const db=require('./db1')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// const Person=require('./models/person1');
// const person = require('./models/person1');
// const menuitem=require('./models/menu')
app.get('/',function(req,res){
    res.send('hello world');
})
const personroutes=require('./routes/personRoutes');
const menuitemRoutes=require('./routes/menuItemRoutes');
app.use('/person',personroutes);
app.use('/menu',menuitemRoutes);
app.listen(3001);