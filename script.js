/*
write array of questions
hide end page & high scores
add event listener to start the game
write function to start the quiz
write function to show the questions
write function to check the answers
display the score
stop the quiz
save user initials
*/

// questions & answer
var questionsArr = [{
    question: "How do you call a function?",
    option1: "commas",
    option2: "square brackets",
    option3: "console.log",
    option4: "parentheses",
    answer: "parentheses"
},
{
    question: "How do you traverse an object?",
    option1: "dot notation",
    option2: "curly brackets",
    option3: "parentheses",
    option4: "square brackets",
    answer: "dot notation"
}, {
    question: "What does JS stand for?",
    option1: "JavaScript",
    option2: "Java",
    option3: "React",
    option4: "all of the above",
    answer: "JavaScript"
},
{
    question: "How do you change the color of text?",
    option1: "background-color",
    option2: "color",
    option3: "font-size",
    option4: "font-decoration",
    answer: "color"
}, {
    question: "How do you log something to the console?",
    option1: "JavaScript",
    option2: "Sources",
    option3: "while",
    option4: "console.log",
    answer: "console.log"
}
];

// hide end page
end.style.display = "none";
btnSubmit.style.display = "none";
playAgain.style.display = "none";
highScores.style.display = "none";
finalUserScore.style.display = "none";
result.style.result = "none";

// manipulating the DOM
var questionsContainer = document.getElementById("questions")
var questionTitle = document.getElementById("questionTitle")
var answerOptions = document.getElementById("answerOptions")
var btnStart = document.getElementById("btnStart")
var btnSubmit = document.getElementById("btmSubmit")
var timer = document.getElementById("timer")
var initials = document.getElementById("initials")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var answer = document.getElementById("answer")
var initials = document.getElementById("userInitials")
var playAgain = document.getElementById("playAgain")
var highScores = document.getElementById("highscores")
var userInitials = document.getElementById("userInitials")
var userName = document.getElementById("userName")
var result = document.getElementById("result")
var finalUserScore = document.getElementById("finalUserScore")

// initializing number of correct and incorrect answers
numIncorrect = 0
numCorrect = 0

// beginning our question array index
var questionArrIndex = 0;

// start the game
startBtn.addEventListener('click', beginQuiz)

// starting time 
var time = 60;

// function to begin quiz
function beginQuiz() {
    console.log("starting quiz")
    //hiding start and end screen
    start.style.display = "none";
    startBtn.style.display = "none";
    playAgain.style.display = "none";
    totalHighScores.style.display = "none";
    finalUserScoreResult.style.display = "none";


    // start the timer
    var startTimer = setInterval(function () {
        // increasing the number of incorrect questions
        numIncorrect++
        //decreasing the time by 1 second
        time--;
        // updating ui for time remaining
        seconds.textContent = time;
        //if out of time or it is the end of questions in the questions arr then stopquiz
        if (time < 0 || questionArrIndex === questionsArr.length - 1) {
            clearInterval(startTimer);
            // timer.textContent = "";
            console.log("Correct" + numCorrect)
            console.log("Incorrect " + numIncorrect)
            // initials.setAttribute("style", "border:2px solid black; margin:5px auto;");
            stopQuiz()
        }
        //goes down by 1 second
    }, 1000);

    // call questions
    showQuestion()

}