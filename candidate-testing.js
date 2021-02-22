const input = require('readline-sync');

let candidateName;
let question;
let correctAnswer;
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
  }
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

function presentAllQnA() {
  console.log(`
  
  Thank you. Please see your results below:

  ....................................................
  ....................................................
  `);
  for(let i = 0; i < candidateAnswers.length; i++) {
    console.log(`RESULTS FOR QUESTION ${i+1}: 
    Your Answer: ${candidateAnswers[i]} 
    Correct Answer: ${correctAnswers[i]}.`);
  }
}

function runProgram() {
  askForName();
  console.log(`Hi ${candidateName}. I'm going to ask you a series of questions. Please answer to the best of your ability.`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  passFail();
  presentAllQnA();
  console.log(`
  >>> Overall Grade: ${(grade / 5) * 100}% (${grade} of 5 responses correct)<<<
  >>> Status: ${status} <<<` );
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