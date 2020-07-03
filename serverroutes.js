const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
res.sendFile(__dirname+'/dist/CI-P0/index.html');
})
module.exports=router;