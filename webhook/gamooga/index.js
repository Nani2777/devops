//import DateTimeUtil from '../util/datetime'
const Url = require('url');
//import nunjucks from 'nunjucks'
//import NunjucksEnv from './nunjucks_custom'
//import VisProp from '../vprop'
//import NodeUtil from 'util'
//import Log from '../util/log'
//import LRU from 'lru-cache'
const express = require('express');
const router = express.Router();
const axios = require('axios');
//const Log = require('stark/utils/log');
const log = require('../../logger');

const TEMPLATE_TIMEOUT_SECS = 60;

let VPROP_RE = /_VIS_(\.([^ \|\}%]*))|_VIS_(\[['"]([^'"]*))/g;

router.get('/wpsmscallback/', function (req, res) {
    
        console.log('came in add link tracking --------------------');
        let self = this;
        let eventToTrigger = 'wp_sms_click';
        let td = new Date().getTime() + '' + parseInt(Math.random()*10000);
        //let url_regex = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/[-a-zA-Z0-9:%_+.~#/=!$\'()*,;@]*)*((\?|&)[-a-zA-Z0-9:%_+.~#?&/=!$\'()*,;@]*)?/gi;
        //body = body.replace(url_regex, function(url, protocol, params, range, __, _, pre, post) {
        let url = 'https://www.lidolearning.com/?utmcampaign=testcamp';    
        let urlToWrap;
            let urlObj = Url.parse(url, true, true);
            urlToWrap = urlObj.format(urlObj);
            console.log();
            //console.log('http://'+'localhost:8000'+'/ev/?e='+encodeURIComponent("^"+trigEvent+" - "+trigId)
            //+'&c='+compId+'&v='+visId+'&s=abc&t=xyz&z='+td+'&redir='+encodeURIComponent(urlToWrap));
            console.log('http://'+'localhost:8000'+'/ev/?e='+eventToTrigger
            +'&c='+compId+'&v='+visId+'&s=abc&t=xyz&z='+td+'&redir='+encodeURIComponent(urlToWrap));
            console.log();
            //return 'http://'+'localhost:8000'+'/ev/?e='+encodeURIComponent("^"+trigEvent+" - "+trigId)
            //+'&c='+compId+'&v='+visId+'&s=abc&t=xyz&z='+td+'&redir='+encodeURIComponent(urlToWrap);
        //});
        console.log('body ---------------------', body);
        //return body;

    });

module.exports = router;
