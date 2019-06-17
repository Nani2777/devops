const express = require('express');
const router = express.Router();
const axios = require('axios');
//const Log = require('stark/utils/log');

router.post('/leadapi/', async (req, res) => {
    try {
        var data = req.body;
        console.log(typeof (data));
        var comp_id = data['c'];
        var vid = data['v'];
        var event = data['e'];
        var custom_params = Object.keys(data).reduce((object, key) => {
        if (key != "c" && key != "v" && key != "e") {
            object[key] = data[key]
        }
        return object
        }, {});
        var str_data = JSON.stringify(custom_params);
        var final_data = str_data.replace('{','').replace('}','').replace(/"/g,'').replace(/,/g,'&').replace(/:/g,'=');
        console.log(final_data);
        try {
        var url = "http://evbk.gamooga.com/ev/?c="+ comp_id +"&v=" + vid + "&e=" + event +"&"+final_data
        /*Object.entries(custom_params).forEach(
            ([key, value]) => url = url + "&ky=" + key + "&vl=" + value + "&tp=s"
        );*/
        console.log(url)
        axios.get(url).then(function (response) {}).catch(function (error) {
            console.log(error);
        });
        } catch (err) {
        console.log('Error in Webhook from Gamooga Event API', err);
        res.writeHead(200);
        res.end("ERROR");
        }
    }
    catch (err) {
        console.log('Falconide Error in Webhook from object \n%s', err);
        res.writeHead(200);
        res.end("ERROR");
    }
    res.end("OK");
});

module.exports = router;