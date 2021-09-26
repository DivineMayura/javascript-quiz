
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
//countdown function using set interval and clear interval          //
function timeKeeper() {
    var timeLeft    = 120;
    var timer       = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            console.log("TIMERrANoUT");
        }
    },1000);
}
//------------------------------------------------------------------//










startButton.addEventListener("click", timeKeeper);