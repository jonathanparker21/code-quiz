// Manipulating the DOM
var questionsContainer = document.getElementById("questions")
var questionTitle = document.getElementById("qtitle")
var choices = document.getElementById("choices")
var startBtn = document.getElementById("start")
var submitBtn = document.getElementById("highscore")
var timer = document.getElementById("timer")
var userInitials = document.getElementById("userInitials")
var optionA = document.getElementById("optionA")
var optionB = document.getElementById("optionB")
var optionC = document.getElementById("optionC")
var optionD = document.getElementById("optionD")
var answer = document.getElementById("answer")
var initials = document.getElementById("userInitials")
var playAgain = document.getElementById("playAgain")
var totalHighScores = document.getElementById("totalHighscores")
var initialsofUser = document.getElementById("initalsofUser")
var username = document.getElementById("username")
var nameResult = document.getElementById("nameResult")
var finalUserScoreResult = document.getElementById("finalUserScoreResult")

// Hiding end page @ start
end.style.display = "none";
highscore.style.display = "none";
playAgain.style.display = "none";
totalHighScores.style.display = "none";
finalUserScoreResult.style.display = "none";
nameResult.style.result = "none";

// Initializing number of correct and incorrect answers
numIncorrect = 0
numCorrect = 0

// Array of questions
var questionsArr = [{
    question: "How do you call a function?",
    option1: "Commas",
    option2: "Square brackets",
    option3: "Console.log",
    option4: "Parentheses",
    answer: "Parentheses"
},
{
    question: "How do you traverse an object?",
    option1: "Dot notation",
    option2: "Curly brackets",
    option3: "Parentheses",
    option4: "Square brackets",
    answer: "Dot notation"
}, {
    question: "What is JS?",
    option1: "JavaScript",
    option2: "Java",
    option3: "React",
    option4: "All of the above",
    answer: "JavaScript"
},
{
    question: "How do you change the color of text?",
    option1: "Background-color",
    option2: "Color",
    option3: "Font-size",
    option4: "Font-decoration",
    answer: "Color"
}, {
    question: "How do you log something to the console?",
    option1: "JavaScript",
    option2: "Sources",
    option3: "While",
    option4: "Console.log",
    answer: "Console.log"
}
];

// To begin our question array index
var questionArrIndex = 0;

// Event listener to start quiz
startBtn.addEventListener('click', beginQuiz)

// Start time 
var time = 60;

function beginQuiz() {
    console.log("starting quiz")

    // Hiding start page during quiz
    start.style.display = "none";
    startBtn.style.display = "none";
    playAgain.style.display = "none";
    totalHighScores.style.display = "none";
    finalUserScoreResult.style.display = "none";

    // Start timer
    var startTimer = setInterval(function () {

        // Increasing the number of incorrect questions
        numIncorrect++

        // Decreasing the time by 1 second
        time--;

        // Updating UI for time remaining
        seconds.textContent = time;

        // To stop quiz
        if (time < 0 || questionArrIndex === questionsArr.length - 1) {
            clearInterval(startTimer);

            console.log("Correct" + numCorrect)
            console.log("Incorrect " + numIncorrect)

            stopQuiz()
        }

        // To go down by 1 second
    }, 1000);

    // call questions
    showQuestion()
}

// To show questions and answer choices
function showQuestion() {
    qtitle.textContent = questionsArr[questionArrIndex].question;
    optionA.textContent = questionsArr[questionArrIndex].option1;
    optionB.textContent = questionsArr[questionArrIndex].option2
    optionC.textContent = questionsArr[questionArrIndex].option3
    optionD.textContent = questionsArr[questionArrIndex].option4
    optionA.addEventListener("click", checkAnswer)
    optionB.addEventListener("click", checkAnswer)
    optionC.addEventListener("click", checkAnswer)
    optionD.addEventListener("click", checkAnswer)
}
