var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var checkSettingAccountOpenLiveModel = require('../models/settingAccountOpenLive.js');
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
router.post('/', verifyToken , function(req, res, next) {
console.log(req.body);
 const dataBox = req.body;
 const _idUser = req.body._idUser;

 jwt.verify(req.token, 'thekingstand', (err,authData)=>{
    if(err){
        res.sendStatus(403);
    }else{
    var modelCheckSetting = new checkSettingAccountOpenLiveModel(dataBox);
    checkSettingAccountOpenLiveModel.findOneAndUpdate(dataBox, {$set: modelCheckSetting}, {upsert: true}, (err, res) => {
            if (err) {
                // handle error
            } else {
               console.log(res);
            }
        });
        // checkSettingAccountOpenLiveModel.findByIdAndUpdate(_idUser , dataBox, (err, info) => {
        //      if (err || !info){
        //          res.json({imes: 'Error'})
        //      }else{
        //         console.log(info);
        //         //  if(info.length == 0){
                     
        //         //     checkSettingAccountOpenLiveModel.create(dataBox,(err, data) => {

        //         //         if (err|| !data){
        //         //             res.json({err});
        //         //         }else{
        //         //             res.json({imes: 'Lưu thành công!'});
        //         //         }

        //         //       })

        //         //  }else{
        //         //     res.json({imes: 'Đã có trong dữ liệu'});
        //         //  }
        //      } 
        // });
    }
  })  
    
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
  console
  .log(req.body);
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
