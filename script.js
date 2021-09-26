
//going to need it to start when the start button is hit.
//timer begins counting as the first question is displayed.
    //on incorrect response timer loses time.
    //maybe get timer to flash red?
//when answered: questions will cycle though to next question
    //making use of node.textContent to update the same heading,body,and answers on page







//this is my variable bank, where I store my precious variables
var startButton     = document.querySelector("#startButton");
var answerButtons    = document.querySelectorAll(".buttons");
var answers         = document.querySelector("#answers");
var content         = document.querySelector("#content");
var questonNumber   = document.querySelector("#top")
var timer           = document.querySelector("#timer")


//question bank, I have an array which stores objects which contain arrays
//I don't think I can get nested arrays work for this purpose
//i plan on using this like the carosel in activity 13&14 "preventing default"
var questions = [{
    qn: "Question 1",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},  //easiest way to store the information?
{   qn: "Question 2",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 3",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 4",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 5",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 6",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 7",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 8",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 9",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
{   qn: "Question 10",
    q: "What is the typographical convetnion javascript typically uses?",
    ans: ["Camel case", "unicase", "Alternating caps", "Cattle case"]
},
];



//------------------------------------------------------------------//
//             this is the start of the entire quiz
function begin() {
var timeLeft = 120; //  -   -   -   -   -   -   -   -   -   -   -   //number for timeLeft on the timer
var num = questions[0]

    function rotator() {
        for (var i=num; i>0; i++) {
            if (timeLeft == 0); {
                console.log(i);
            } else {
                
            }
        }
    };


    var timer = setInterval(function () {                           //countdown function using set interval and clear interval
        timeLeft--;                                                 //  this
        document.getElementById("timer").textContent = timeLeft;    //   is
        if (timeLeft === 0) {                                       //   the
            clearInterval(timer);                                   //  timer
            console.log("TIMERrANoUT");                             // function
        }                                                           //
    },1000);                                                        //

    answers.textContent         = 
    content.textContent         =
    questionNumber.textContent  =

answerButtons.addEventListener("click", rotator);
}
//------------------------------------------------------------------//










startButton.addEventListener("click", begin);