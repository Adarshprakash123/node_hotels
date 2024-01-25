const express=require('express');
const router=express.Router();
const Person=require('../models/menu');
const menuitem=require('../models/menu')
router.post('/',async(req,res)=>{
    try{
       const data=req.body;
       const newperson=new menuitem(data);
       const saved=await newperson.save();
       console.log('Saved person to database');
       res.status(201).json(saved);
    } catch(error){
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.get('/',async(req,res)=>{
    try{
       const data=await menuitem.find();
       console.log('data fetched');
       res.status(200).json(data);
    }
    catch(error){
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports=router;