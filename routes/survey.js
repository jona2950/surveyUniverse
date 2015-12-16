/** --comment header--
* @file: survey.js (under routing folder)
* @type: JavaScript
*
* homepage routing for main page of application, "Survey Universe"
* when request is domain address ONLY eg, www.surveyuniverse.com/...
* 
* @author Jonathan Fachola-Esnal
* @name: Survey Universe (routes for edit, create and stats)
* @description: survey.js handles any requests for creating a new survey, survey editing, 
* and survey stats viewable to content creator. 
* @Routes:  "/create", 
            "/edit?surveyName" (dependent on survey posted to and processed authetication thru route), 
            "/delete?surveyName" (dependent on survey posted to and processed authetication thru route), 
            "/stats?surveyName (dependent on survey posted to and processed authetication thru route)" 
*   
* survey content edit & deletion - ONLY WHEN - user has ownership of survey, and website administrator
* are alowed to remove or edit content
* Chained users to survey are only allowed to edit its contents.
*/

var express = require('express');
var passport = require('passport');

var router = express.Router();

var Users = require('../models/user');

/* get event for "/survey" and render the panel */
router.get('/survey', function (req, res, next) {
    res.render('index', {
        title: 'Survey Panel',
        displayName: req.user ? req.user.displayName : ''
    });
});

