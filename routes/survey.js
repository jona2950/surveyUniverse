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

var User = require('../models/user');
var Surveys = require('../models/survey');


var User = require('../models/user');

/* Utility functin to check if user is authenticatd */
function requireAuth(req, res, next){

  // check if the user is logged in
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  next();
}

/* get event for "/survey" and render with precreated surveys */
router.get('/', function (req, res, next) {
    //survey retains found collection data from Surveys Model
    Surveys.find({}, function(err, questioneer) {
        if (err) {
             throw err;
            //object of all the surveries
            console.log(questioneer);
        } 
        else {
            res.render('survey/index', {
                title: 'Survey Panel',
                displayName: req.user ? req.user.displayName : '',
                Surveys: questioneer
            })
        }
    });
});

//listen for get requests to /ask-how
router.get('/ask-how', function(req, res, next) {
    res.render('survey/ask-how', {
        title: 'Binary or Quantized', 
        displayName: req.user ? req.user.displayName : '', 
        addressNotes: 'In this section you need to choose how questions will be presented',
        questioneerType: ['binary', 'quantumn']
    } ); 
});

//take post requests from ask-how
router.post('/ask-how', function(req, res, next) {
    //display to console the option user selected
   console.log(req.body.questType);
  
    if (req.body.questType == "quantumn"){ 
        res.redirect('survey/add');
    }
    else if (req.body.questType == "binary"){
        res.redirect('survey/add');
    }
   
});

//take post requests from ask-how
router.post('/questions', function(req, res, next) {
    if (req.body.questType == "quantumn"){
        Surveys.create({
            survey_name: req.body.quest_name,
            question_1: req.body.quest_1,
                question_1_1:  req.body.quest_1_1,
                question_1_2:  req.body.quest_1_2,
                question_1_3:  req.body.quest_1_3,
                question_1_4:  req.body.quest_1_4,
            question_2: req.body.quest_2,
                question_2_1:  req.body.quest_2_1,
                question_2_2:  req.body.quest_2_2,
                question_2_3:  req.body.quest_2_3,
                question_2_4:  req.body.quest_2_4,
            question_3: req.body.quest_3,
                question_3_1:  req.body.quest_3_1,
                question_3_2:  req.body.quest_3_2,
                question_3_3:  req.body.quest_3_3,
                question_3_4:  req.body.quest_3_4,
            question_4: req.body.quest_4,
                question_4_1:  req.body.quest_4_1,
                question_4_2:  req.body.quest_4_2,
                question_4_3:  req.body.quest_4_3,
                question_4_4:  req.body.quest_4_4,
            question_5: req.body.quest_5,
                question_5_1:  req.body.quest_5_1,
                question_5_2:  req.body.quest_5_2,
                question_5_3:  req.body.quest_5_3,
                question_5_4:  req.body.quest_5_4,
            surveyType: req.body.quest_type,
            creator: req.user ? req.user.displayName : '',
            created: Date.now(), 
            updated: Date.now()
            
        }, function (err, Survey) {
            if (err) {
                console.log(err);
                res.end(err);
            }
            else {
                res.redirect('ask/questions');
            }
        })
    } else if (req.body.questType == "binary") {
        Surveys.create({
            question_1: req.body.quest_1,
                question_1_1:  req.body.quest_1_1,
            question_2: req.body.quest_2,
                question_2_1:  req.body.quest_2_1,
            question_3: req.body.quest_3,
                question_3_1:  req.body.quest_3_1,
            question_4: req.body.quest_4,
                question_4_1:  req.body.quest_4_1,
            question_5: req.body.quest_5,
                question_5_1:  req.body.quest_5_1,
            surveyType: req.body.quest_type,
            creator: req.user ? req.user.displayName : '',
            created: Date.now(), 
            updated: Date.now()
            
        }, function (err, Survey) {
            if (err) {
                console.log(err);
                res.end(err);
            }
            else {
                res.send('ask/questions');
            }
        })
    }

});

/* Render the Add Survey Page */
router.get('/add', requireAuth, function (req, res, next) {
    res.render('survey/add', {
        title: 'Users',
        displayName: req.user ? req.user.displayName : ''
    });
});

/* process the submission of a new user */
router.post('/add', requireAuth, function (req, res, next) {
    Surveys.create({
        survey_name: req.body.survey_name,
        question_1: req.body.question_1,
        question_2: req.body.question_2,
        question_3: req.body.question_3,
        question_4: req.body.question_4,
        question_5: req.body.question_5,
        surveyType: req.body.surveyType,
        creator: req.user ? req.user.DisplayName: '',
        created: Date.now(),
        updated: Date.now()
    }, function (err, User) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey');
        }
    });
});



router.post

module.exports = router;