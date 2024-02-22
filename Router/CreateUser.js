const express=require('express');
const router=express.Router();
const User=require('../models/User');

router.post('/createuser',async(req,resp)=>{
    try{
        const NewUser=await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password

        })
        resp.json({success:true})
    }
    catch(error){
        console.log(error)
        resp.json({success:false})
    }
});

module.exports=router;