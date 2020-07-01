const express = require('express');
const router = require('express').Router();
let Vendor = require('../models/vendor.model');

router.post('/vendor/create',(req,res)=>{
    console.log(req.body)
    const vendor = new Vendor(req.body);
    vendor.save((err,data)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
        res.json({
            data:data
        })
    })
})

//list all

router.route('/vendors').get(function(req,res){
    console.log(req.query);
    Vendor.find()
    .then(function(vendors){
        res.json(vendors)
    })
    .catch(function(err){
        console.log(err);
    })
});

module.exports = router;

