const express = require('express');
const router = express.Router();
const axios = require('axios');


router.post('/ifli_non_hni/', async (req, res) => {
    try {
        let callback_feedback = req.body;
        let uid = callback_feedback.uid;
        let event = callback_feedback.event;
        let feedback = callback_feedback.feedback;
        let url = "http://js1in1.gamooga.com/evwid/?c=1bcef8b8-7c5d-400b-a02d-41cf56a5f2bb&u=" + uid + "&e=" + event;
        Object.entries(feedback).forEach(
            ([key, value]) => url = url + "&ky=" + key + "&vl=" + value + "&tp=s"
        );
        axios.get(url).then(function (response) {
            console.log("Successfully data pushed to gamooga", feedback);
            if (response.status == 200) {
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end("OK");
            }
        }).catch(function (error) {
            console.log("Failed to store data in Gamooga", feedback);
            //res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end("ERROR");
        });
    } catch (e) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end("ERROR");
    }
});

router.get('/ifli_non_hni/', async(req, res) => {
    console.log(req.body)
    console.log('Entered')
    res.status(200).send('OK')

})

module.exports = router;