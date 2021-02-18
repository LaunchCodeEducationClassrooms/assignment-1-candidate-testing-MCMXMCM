const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [
  "1) Who was the first American woman in space? ",
  "2) True or false: 5000 meters = 5 kilometers. ",
  "3) (5 + 3)/2 * 10 = ? ",
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "5) What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "True",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

let grade = 0;



let status = "";


function askForName() {
  return candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  for(let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    
    console.log(`RESULTS FOR QUESTION ${i+1}: 
    Your Answer: ${candidateAnswers[i]} 
    Corect Answer: ${correctAnswers[i]}.`);
  }
  /*
  candidateAnswer = input.question(question).toUpperCase();
  if (candidateAnswer === correctAnswer.toUpperCase()) {
    console.log("Correct!");
} else {
    console.log("Sorry, that's not quite right.")
}
*/
}

function gradeQuiz(candidateAnswers) {
  

  for(let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
     grade += 1;
     } 
    }
  return grade
}

function passFail() {
  if (grade < 4) {
     status = 'FAILED';
  } else {
     status = 'PASSED';
  }
  return status;
}


function runProgram() {
  askForName();
    console.log(`Hi ${candidateName}. I'm going to ask you a series of questions. Please answer to the best of your ability.`)
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  passFail();
  console.log(`
  >>> Overall Grade: ${(grade / 5) * 100}% (${grade} of 5 responses correct <<<)
  >>> Status: ${status}` );
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};