const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/implwebhook', function (req, res) {
    console.log('chat logs');
    console.log(req.body);
    //console.log(req.query);
    //console.log(req.params);
    //console.log(req.headers);
    //Logger.info(req.body);
    //Logger.info(req.query);
    //Logger.info(req.params);
    //Logger.info(req.headers);
    console.log(req.body);
    res.writeHead(200);
    res.end("OK");
  });

module.exports = router;