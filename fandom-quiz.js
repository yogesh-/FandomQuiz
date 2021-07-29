// User prompt - Asking name

var readlineSync = require("readline-sync");

var score = 0;

const chalk = require('chalk');

var userPrompt = readlineSync.question("What is your name ? ");

console.log(chalk.blue("Welcome to Sabse Bada Friend contest "+ userPrompt+"!!"+"answer few questions to know your friendship score"));

// array objects

var questionbank =[
  {question:"Favourite hindi web series ",answer:"scam 1992"},
  {question:"Favourite english web series ",answer:"money heist"},{question:"Favourite movie ",answer:"The Dark Knight"},{question:"Favourite book ",answer:"atomic habits"}
  ]



//quiz function

function quiz(question,answer) {
  var userAns = readlineSync.question(question)
    if (userAns === answer) {
    console.log(chalk.green("Your answer is correct"))
    score++
    } 
    else 
    {
    console.log(chalk.red("You answer is wrong"))
    score--
    }
  console.log(chalk.yellow("Your total score is ",score))
  console.log(chalk.blue("____________________________"))
}



for (i=0;i<questionbank.length;i++){
  var currentQuestion = questionbank[i]
  quiz(currentQuestion.question,currentQuestion.answer)
}

console.log("Thanks for playing "+userPrompt+" Your friendship score is",score/4*100+"%")




