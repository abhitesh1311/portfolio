const mongoose = require('mongoose');
const Admin = require('../models/admin');

async function adminLogin(req,res){

    const data=await Admin.findOne({email: req.body.email});
    if(data){
        if(data.password===req.body.password){
            res.status(200).json({message:"Login successful"});
        }else{
            res.status(401).json({message:"Invalid password"});
        }
    }else{
        res.status(404).json({message:"Admin not found"});
    }
    


}
module.exports={adminLogin};