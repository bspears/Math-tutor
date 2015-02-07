$('#continue').hide();
$('.getAnswer').hide();
var continueButton = $('#continue');
var player;
var answer;
var count = 1;
var score = 0;

$('.getName').on('click', function() {
  player = $('#answer').val();
  $('.getName').hide();
  $('#question').text('Hi ' + player + '! I have a challenge for you. See how many of these math problems you can get correct in a row. If you miss one, the counter goes back to 0, so be careful!');
  $('#answer').val(' ');
  $('#answer').hide();
  continueButton.show('slow');
});

$('.getAnswer').on('click', function() {
  checkAnswer();
});

var newQuestion = function(question, correctAnswer) {
  $('#answer').show('slow');
  $('#question').text(question);
  answer = correctAnswer;
};

var checkAnswer = function() {
  var input = Number($('#answer').val());
  if(input === answer) {
    $('#question').text("Good job! You are right!");
    score ++;
    $('#score').text(score);
    continueButton.show('slow');
  } else {
    score = 0;
    $('#score').text(score);
    $('#question').append('<br>Not quite... Try again.');
    $('#answer').val(' ');
  };  
};

continueButton.on('click', function() {
  var newQuestion = new Question();
  var option = Math.round(Math.random());
  continueButton.hide();
  $('.getAnswer').show();
  $('#answer').show().val(' ');
  // newQuestion(problems.number1.q, problems.number1.a);
  if(option === 1) {
  newQuestion.subtraction();
  } else {
  newQuestion.addition();
  }
});



function Question() {
  this.number1 = Math.ceil(Math.random()*51);
  this.number2 = Math.ceil(Math.random()*51);
  this.addition = function() {
  $('#question').text("Please tell me what " + this.number1 + " plus " + this.number2 + " equals.");
  answer = this.number1 + this.number2;
  };
  this.subtraction = function() {
  $('#question').text("Please tell me what " + (this.number1 + this.number2) + " minus " + this.number2 + " equals.");
  answer = (this.number1 + this.number2) - this.number2;
  };
};

// var problems = {

//   "number1": {
//                 "q" : "Please tell me what twenty minus ten equals.",
//                 "a" : "ten"
//               },
//   "number2": {},
//   "number3": {},
//   "number4": {},
//   "number5": {},
//   "number6": {},
//   "number7": {},
//   "number8": {},
//   "number9": {},
//   "number10": {},

// };