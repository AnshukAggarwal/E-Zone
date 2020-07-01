const router = require('express').Router();
const express = require('express');

let Product = require('../models/product.model');
//list all
router.route('/products').get(function(req,res){
        Product.find()
        .then(function(products){
            res.json(products)
        })
        .catch(function(err){
            console.log(err);
        })
});


router.route('/products/search').get(function(req,res){
    let query = req.query.query;
    if(query){
        Product.find({name: { $regex: query, $options: 'i' } })
        .then(function(products){
            res.json(products)
        })
        .catch(function(err){
            console.log(err);
        })
    }else{
        Product.find()
        .then(function(products){
            res.json(products)
        })
        .catch(function(err){
            console.log(err);
        })
    }

});


// router.route('/add').post(function(req,res){
//     const name = req.body.name;
//     const description = req.body.description;
//     const cost = Number(req.body.cost);

//     const newProduct = new Product({
//        name,
//        description,
//        cost,
//     });
//     newProduct.save()
//     .then(() => res.json('Exercise added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

//create
router.post('/product/create',(req,res)=>{
    const product = new Product({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        vendor:req.body.vendor
    });
     product.save((err,data)=>{
        if(err){
            res.status(400).json({
                erro:err
            })
        }
        res.json({
            data:data
        })
     }) 
})

//route to get a particular product

router.param('Id',(req,res,next,id)=>{
    Product.findById(id).exec((err, product)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
        req.product= product;
        next();
    })
});
//read
router.get('/product/:Id', (req,res)=>{
    return res.json({
        product:req.product
    })
})

//delete

router.delete('/product/delete/:Id', (req,res)=>{
    let product = req.product;
    product.remove((err,succ)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
        res.json({
            message:"Deleted"
        })
    })
})
//update

router.put('/product/update/:Id', (req,res)=>{
    console.log(req.body);
    let product= req.product;
    product.name=req.body.name;
    product.description=req.body.description;
    product.cost=req.body.cost;
    product.vendor=req.body.vendor;

    product.save((err,result)=>{
        if(err){
            res.status(400).json({
                error:err
            })
            res.json({
                message:result
            })
        }

    })
})

//listRelated

router.get('/product/related/:Id', (req,res)=>{
    let product= req.product;
    Product.find({ vendor:product.vendor, _id:{ $ne: product._id} })
    .exec((err, data)=>{
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

//test

// router.get('/product/review', (req,res)=>{
//     Product.find({vendor:"5ee5550ce7e43b91a06f63cb"})
//     .exec((err,data)=>{
//         if(err){
//             res.status(400).json({
//                 error:err
//             })
//         }
//         res.json({
//             data:data
//         })
//     })
// })

router.post('/products/review', (req,res)=>{
    let array= req.body.filters;
    if(array.length>0){
        Product.find({ vendor:{$in:array}})
        .exec((err, data)=>{
            if(err){
                res.status(400).json({
                    error:err
                })
            }
            res.json({
                data:data
            })
        })
    }else{
        Product.find()
        .exec((err, data)=>{
            if(err){
                res.status(400).json({
                    error:err
                })
            }
            res.json({
                data:data
            })
        }) 
    }
})

module.exports= router;