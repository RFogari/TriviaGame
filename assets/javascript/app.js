/*
Trivia Game -
Start button to begin playing.
Start button will reset the timer and score.
Array of questions, and possible answers
if function to validate answers to questions.
timer
score tracker - number of questions correct/wrong.
*/

var intervalId
var questionCounter = 0;
var correct = 0;
var wrong = 0;
var blank = 0;
var currentQuetion;

//Game questions array
var gameQuestions = [{
       
    question: "In which state is it illegal to eat an orange in a bathub?",

    answers: ["California", "New York", "Florida", "Vermont"],
    correctAnswer: "California",
}, {
    question: "What is the largest two digit prime number?",
    answers: ["95", "97", "89", "93"],
    correctAnswer: "97",
},

{
    question: "Who was the first person to fly in space?",
    answers: ["Scott Kelly", "Alan Shepard", "John Glenn", "Yuri Gagarin"],
    correctAnswer: "Yuri Gagarin",
    
},

{
    question: "Vehicles from which country use the international registration letter of 'E'?",
    answers: ["Germany", "China", "Spain", "United States"],
    correctAnswer: "Spain",
},

{
    question: "How deep is a fathom of water?",
    answers: ["1,828 meters", "1,000 meters", "1,600 meters", "2,000 meters"],
    correctAnswer: "1,828 meters",
},

{
    question: "What letter and number is given to the leading Western Economic powers?",
    answers: ["E3", "M6", "E8", "G8"],
    correctAnswer: "G8",
}
]


//array length needed for for loop later on in code to cycle through all questions being asked.
var questionsLength = gameQuestions.length;


$(document).ready(function(){
    $('.button-start').text("Click Here to Start!");
    $('.time-display').hide();
    $('.button-start').on("click", function (){
    $('.instructions').hide()
        displayQuestions();

    });
});

//function to validate if answers are correct.
function correctAnswer (){
    $('.button').off("click");
    
    $('.answer-buttons').hide();
    
    $('.question').text("Corect!");
    
    //update scores
    questionCounter++;
    correct++;

    //reset timer
    clearInterval(intervalId);

    if (questionCounter == questionsLength){
        setTimeout(endScreen, 5000);
    } else {
        setTimeout(displayQuestions, 2000);
    }
};


//function to validate if answers are wrong
function wrongAnswer (){
    $('.button').off("click");
    $('.answer-buttons').hide();
    $('.question').text("Wrong!");
    
    
    //update scores and reset timer
    questionCounter++;
    wrong++;
    clearInterval(intervalId);

    if (questionCounter == questionsLength){
        setTimeout(endScreen, 5000);
    } else {
        setTimeout(displayQuestions, 2000);
    }
};


//function if time runs out.
function timesUp () {
    $('.button').off("click");
    $('.question').text("Time's Up! Game Over!")
    $('.answer-buttons').hide();
    questionCounter++;
    blank++;
    clearInterval(intervalId);
    endScreen();

};


//function for end screen - this will update player on game stats and option to reset game.
function endScreen() {
    $('.results-buttons').show();
    $('.button-results').text("Game Over!");
    $('.win').text("Correct Answers:" + correct);
    $('.wrong').text("Wrong Answers:" + wrong);
    $('.draw').text("Unanswered Questions" + blank);
    $('.time-display').hide();

    //reset and restart
    gameReset();
    displayQuestions();
};

//reset the game - reset the counter and remove any previous scores
function gameReset(){
    questionCounter= 0;
    correct =0;
    wrong=0;
    blank=0;


    return questionCounter, correct, wrong, blank

    $('.results-buttons').hide();

}


//function for displaying game questions
function displayQuestions(){
    $('.button-start').hide();
    $('.time-display').show();
    

    //question timer
    var timer = 10;
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        timer--;
        $(".timer").html(timer);
        if (timer ===0) {
            timesUp();
        };
    };

    $('.button').off("click");

    $('.question').text(gameQuestions[questionCounter].question);
    console.log(gameQuestions[questionCounter].question)

    $('.answer-buttons').show();

    $('.answer-1').text(gameQuestions[questionCounter].answers[0]);
    $('.answer-2').text(gameQuestions[questionCounter].answers[1]);
    $('.answer-3').text(gameQuestions[questionCounter].answers[2]);
    $('.answer-4').text(gameQuestions[questionCounter].answers[3]);

    $('.button').on("click", function(){
                
        if (        
            $(this).text() === gameQuestions[questionCounter].correctAnswer){
            
                console.log(gameQuestions[questionCounter].correctAnswer)
            
                correctAnswer();
                console.log(correctAnswer());
        
            } else {
        
                wrongAnswer();
        }    
    
    
    });


}

