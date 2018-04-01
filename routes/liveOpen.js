var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var localStorage = require('localStorage')
var Account = require('../models/Account');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
	Account.find(function(err, person) {
		if (err) {
			return next(err);
		} else {
			res.json(person);
		}
	});
});
router.post('/', function(req, res, next) {
	const accessToken = req.body.accessToken;
	const idLiveVid = req.body.idLiveVid;
	localStorage.setItem('idLiveVidServer', idLiveVid);
	localStorage.setItem('accessTokenServer', accessToken);

	// get value localStorage
	const accessTokenServer = localStorage.getItem('accessTokenServer');
	const idLiveVidServer = localStorage.getItem('idLiveVidServer');
	res.json({
		accessToken,
		idLiveVid
	});
});


module.exports = router;
