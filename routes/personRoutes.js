const express=require('express');
const router=express.Router();
const Person=require('../models/person1');
router.post('/',async(req,res)=>{
    try{
       const data=req.body;
       const newperson=new Person(data);
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
       const data=await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }
    catch(error){
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.get('/:worktype',async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
            const resplonse=await Person.find({work:worktype});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'invalid work type'});
        }
    }
    catch(err){
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const updatedpersonaldata=req.body;
        const response=await Person.findByIdAndUpdate(personid,updatedpersonaldata,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id',async(req,res)=>{
    try{
       const personid=req.params.id;
       const response=await Person.findByIdAndDelete(personid);
       if(!response){
        return res.status(404).json({error:'person not found'});
       }
       console.log('data deleted');
       res.status(200).json({message:'person deletd'});
    }catch(err){
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports=router;