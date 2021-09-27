
//going to need it to start when the start button is hit.
//timer begins counting as the first question is displayed.
    //on incorrect response timer loses time.
    //maybe get timer to flash red?
//when answered: questions will cycle though to next question
    //making use of WEBapi to update the same heading,body,and answers on page
//after quiz ends or timer runs out score will equal number of correct answers times time
//will log time on scoreboard using local storage






//this is my variable bank, where I store my precious variables
var startButton     = document.querySelector("#startButton");
// var answerButt      = document.querySelectorAll(".answerButt");
var answers         = document.querySelector("#answers");
var a0              = document.querySelector("#a0");
var a1              = document.querySelector("#a1");
var a2              = document.querySelector("#a2");
var a3              = document.querySelector("#a3");
var content         = document.querySelector("#content");
var questionNumber  = document.querySelector("#questionNumber");
var timer           = document.querySelector("#timer");
var quizBox         = document.querySelector("#quizBox");


//question bank, I have an array which stores objects which contain arrays
//I don't think I can get nested arrays work for this purpose
//i plan on using this like the carosel in activity 13&14 "preventing default"

var questions = [{
    qn: "Question 1",
    q: "What is the typographical convention that javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"],
    correct: "Camel case"
},  //easiest way to store the information?
{   qn: "Question 2",
    q: "What is 3 + 4?",
    ans: ["6", "9", "7", "12"],
    correct: "7"
},
{   qn: "Question 3",
    q: "What is the first color of the rainbow?",
    ans: ["Bisque", "Maroon", "Violet", "Red"],
    correct: "Red"
},
{   qn: "Question 4",
    q: "Why is Magenta the best color?",
    ans: ["It's not.", "I don't know.", "Because it's cool.", "No, you're the coolest color!"],
    correct: "Because it's cool."
},
{   qn: "Question 5",
    q: "What country won the very first FIFA World Cup in 1930?",
    ans: ["Uruguay", "Belgium", "Brazil", "Peru"],
    correct: "Uruguay"
},
{   qn: "Question 6",
    q: "Is Javascript a type of OS?",
    ans: ["Yes", "Yes, and it shouldn't be.", "No, but it should be.", "No"],
    correct: "No"
},
{   qn: "Question 7",
    q: "What does 'HTTP' stand for in computer terms?",
    ans: ["HyperText Transfer Protocol", "High Temperature Thermoplastic", "Hydrated Terphenyls", "Huge Turquoise Tensgrisity Platform"],
    correct: "HyperText Transfer Protocol"
},
{   qn: "Question 8",
    q: "Safari, Chrome, Firefox, and Exporer are types of what?",
    ans: ["Operating Systems", "Web browsers", "Secure Shell", "Web Pylons"],
    correct: "Web broswers"
},
{   qn: "Question 9",
    q: "What was Google Chrome initially called?",
    ans: ["Google Chrome", "Chrome", "Google Canary", "WebCore Chrome"],
    correct: "Chrome"
},
{   qn: "Question 10",
    q: "What is Linux?",
    ans: ["Penguine Pokemon", "Human User Interface Device", "iPhone Software", "Operating System"],
    correct: "Operating System"
},
{   qn: "",
    q: "",
    ans: ["--", "--", "--", "--"],
    correct: "-"
},
];



//global variables
var x = 0;
var timeLeft = 121; //  -   -   -   -   -   -   -   -   -   -   -   -   //number for timeLeft on the timer  121 because it starts off at one less for some reason
var score = 0;

// function open(){
// };
                
                
//------------------------------------------------------------------//
//             this is the ignition of the entire quiz
function begin() {


        var timer = setInterval(function () {                           //countdown function using set interval and clear interval
            timeLeft--;                                                 //  this
            document.getElementById("timer").textContent = timeLeft;    //   is
            if (timeLeft === 0) {                                       //   the
                clearInterval(timer);                                   //  timer
                console.log("TIMERrANoUT");                             // function
            }                                                           //
        },1000);
        a0.innerText = questions[x].ans[0];                     //  This displays
        a1.innerText = questions[x].ans[1];                     //  the questions
        a2.innerText = questions[x].ans[2];                     //  and the
        a3.innerText = questions[x].ans[3];                     //  answers as
        content.innerText         = questions[x].q;             //  the array
        questionNumber.innerText  = questions[x].qn;            //  rotates
        quizBox.setAttribute("style", "display:flex;")
// document.querySelector("startdiv")[0].setAttribute("style", "visibility:hidden");                                                                //
}


answers.addEventListener("click", function(event){
        // if the 
    if (event.target.textContent === questions[x].correct){
        timeLeft = timeLeft + 10;
        score++
    } else {
        timeLeft = timeLeft - 20;
    }
    if (x>8) {quizBox.setAttribute("style", "display:none;");
            }
    x++
                a0.innerText = questions[x].ans[0];                     //  This displays
                a1.innerText = questions[x].ans[1];                     //  the questions
                a2.innerText = questions[x].ans[2];                     //  and the
                a3.innerText = questions[x].ans[3];                     //  answers as
                content.innerText         = questions[x].q;             //  the array
                questionNumber.innerText  = questions[x].qn;            //  rotates  
});
















startButton.addEventListener("click", begin);