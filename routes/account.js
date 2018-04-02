var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auth = require('../models/Account.js');
var jwt = require('jsonwebtoken');

/* GET ALL AuthS */
router.get('/', verifyToken, function(req, res, next) {

  jwt.verify(req.token, 'thekingstand',(err,authData)=>{
    if(err){
        res.sendStatus(403);
    }else{
        Auth.find(function (err, users) {
            if (err|| !users){
                return next(err);
            }else{
                res.json(users);
            } 
           
        });
    }
  })  
});

/* GET SINGLE Auth BY ID */
router.get('/:id', function(req, res, next) {
  Auth.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Auth */
router.post('/', function(req, res, next) {
 console.log(req.body);
 const _idUser = req.body._id;
 const userDataSign = req.body;
    jwt.sign({userDataSign}, 'thekingstand' , (err,token) => {
        Auth.findById(_idUser, function (err, userData) {
            if (err || !userData){
                Auth.create(req.body, function (err, userData) {
                    if (err || !userData){
                        res.status(404).json({
                            message: '404 Data'
                        });
                    }else{
                        res.status(200).json({userData, token});
                    }
                });
            }else{
                res.status(200).json({userData, token});
            }
        });
    });
});

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearer = bearerHeader.split(' ');
        // Get totken from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    }else{
        // Forbidden
        res.sendStatus(403);
    }
}
/* UPDATE Auth */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Auth.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Auth */
router.delete('/:id', function(req, res, next) {
  Auth.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
