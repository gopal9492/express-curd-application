const express = require('express');
const route= express.Router();
const usermodel=require('../model/usermodel');

route.get('/',(req,res)=>{
    res.render("home");
})
route.get('/home',(req,res)=>{
res.render("home");
})
route.get('/add',(req,res)=>{
    res.render("add-user");
})
route.post('/add',(req,res)=>{
    var data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    var user= new usermodel(req.body);
    user.save(function(err){
        if(err){
            res.render('add-user',{message:"data is not added"});
        }
        else{
            res.render('print',{message:"successfully data added"});
        }
    });   
})
route.get('/display',(req,res)=>{
    usermodel.find(function(err,users){
        if(err){
            console.log(err);
        }
        else{
            res.render("display-users",{users:users});
        }
    })
    
})
route.get('/show/:id',(req,res)=>{
    usermodel.findById(req.params.id,function(err,users){
        if(err){
            console.log(err);
        }
        else{
            res.render("show-user",{users:users});
        }
    })
})
route.get('/edit/:id',(req,res)=>{
    usermodel.findById(req.params.id,function(err,users){
        if(err){
            console.log(err);
        }
        else{
            res.render("edit-user",{users:users});
        }
    })
})
route.post('/edit/:id',(req,res)=>{
    usermodel.findByIdAndUpdate(req.params.id,req.body, function(err,users){
        if(err){
            res.redirect('edit/'+req.params.id);
        }
        else{
            res.render("print",{ message : "your data is updated."});
        }
    })
})
route.get('/delete/:id',(req,res)=>{
    usermodel.findByIdAndDelete(req.params.id,function(err,project){
        if(err){
            res.redirect('print',{message:"data is not deleted"})
        }
        else{
           // alert("data is deleted"+req.params.id);
            res.render('print',{message:"successfully data is deleted the id no is: "+req.params.id});
        }
    })
})
module.exports=route;
