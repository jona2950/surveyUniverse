// Import mongoose and bcrypt
var mongoose = require('mongoose');

// need an alias for mongoose.Schema
var Schema = mongoose.Schema;

// Define our user Schema
var SurveySchema = new Schema({
survey_name: String,
question_1: String,
  question_1_1: String,
  question_1_2: String,
  question_1_3: String,
  question_1_4: String,
 question_2: String,
  question_2_1: String,
  question_2_2: String,
  question_2_3: String,
  question_2_4: String,
 question_3: String,
  question_3_1: String,
  question_3_2: String,
  question_3_3: String,
  question_3_4: String,
 question_4: String,
  question_4_1: String,
  question_4_2: String,
  question_4_3: String,
  question_4_4: String,
 question_5: String,
  question_5_1: String,
  question_5_2: String,
  question_5_3: String,
  question_5_4: String,
 surveyType: String, 
 creator: String,
 created: Number,
 updated: Number
}, {
 collection: 'surveys'
});

module.exports = mongoose.model('survey', SurveySchema);