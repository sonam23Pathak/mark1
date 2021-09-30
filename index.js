var readlineSync = require("readline-sync");
var score = 0;

// data of high score
var highscore = [
  {
    name: "sonam",
    score: 3,
  },
  {
    name: "muskan",
    score: 2,
  },

]
// array of objects
 var questions = [
   {
   question: "where do i live?  ",
   answer:  "purulia"
 } , {
   question: " where is my college?  ",
   answer: "uttar pradesh"
 },
 {
   question: "what is my favourite food? ",
   answer:  "south indian"
 },
 {
   question: "favourite colour? ",
   answer: "black"
 },
 {
   question:"dream country? ",
   answer: "spain"
 },
 {
   question: "dream company? ",
   answer: " google"
 },
 {
   question: "degree pursuing? ",
   answer: " b-tech"
 }
 
 ]
 function welcome() {

var username = readlineSync.question("whats your name?");

console.log(" welcome "  +  username  +   " do you know Sonam ");
 }
 
// play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
     
  } else{
    console.log("wrong!");

  }
   console.log(" current score: ", score);
   console.log("----------");
   }
    
function game() {
  for (var i=0; i<questions.length; i++){
    var currentQuestions = questions[i];
    play (currentQuestions.question, currentQuestions.answer);
  }
}
function showScores() {
  console.log("YAY! you scored: ", score);
  console.log("check out the highscore, if you should be there oing me I'LL update it");

  highscore.map(score => console.log(score.name, " : ", score.score))
  }



 welcome();
 game();
 showScores();