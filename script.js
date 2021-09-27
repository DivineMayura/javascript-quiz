
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
var answers         = document.querySelector("#answers");
var a0              = document.querySelector("#a0");
var a1              = document.querySelector("#a1");
var a2              = document.querySelector("#a2");
var a3              = document.querySelector("#a3");
var content         = document.querySelector("#content");
var questionNumber  = document.querySelector("#questionNumber");
var timer           = document.querySelector("#timer");
var quizBox         = document.querySelector("#quizBox");
var outerdiv        = document.querySelector("#outerdiv");
var showButton      = document.querySelector("#showbutton");
var returnButton    = document.querySelector("#returnbutton");
var clock           = document.querySelector("#clock");

var scoreboard      = document.querySelector("#scoreboard");
var submitScore     = document.querySelector("#submitScore");
var sheet           = document.querySelector("#sheet");
var scoreList       = document.querySelector("#scorelist");
var scoreText       = document.querySelector("#scoreText");
var scoreLabel      = document.querySelector("#scoreLabel");

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
    q: "", //keeping this here because it otherwise throws an error for not existing.
    ans: ["--", "--", "--", "--"],  //so it's a placeholder.
    correct: "-"
},
];



//global variables
var x = 0;
var timeLeft = 120; //  -   -   -   -   -   -   -   -   -   -   -   -   //number for timeLeft on the timer
var score = 0;
var times=timeLeft;
var scores = [];

scoreboard.setAttribute("style", "display:none;");



//------------------------------------------------------------------//
//             this is the ignition of the entire quiz
function begin() {
    redFlash();
    timeTrack();

        var timer = setInterval(function () {                       //countdown function using set interval and clear interval
            timeLeft--;                                             //  this
            timeTrack();                                            //   is
            if (timeLeft <= 0) {                                    //   the
                clearInterval(timer);                               //  timer
                saveScore()                                         // function
            }                                                       //
        },1000);
        pushQuestion();

        quizBox.setAttribute("style", "display:flex;");             // This makes quiz visibile on startup
        document.querySelector("#startdiv").setAttribute("style", "display:none"); 
}


answers.addEventListener("click", function(event) {
        // if the 
    if (event.target.textContent === questions[x].correct) {
        timeLeft = timeLeft + 10;
        score++;
        
    } else
    //  if (event.target.textContent == JSON.stringify(questions[x].ans)) {    can't get it to delegate the event through the if/else statement because it returns something different
    //     console.log("not a button");} else 
    { timeLeft = timeLeft - 20; 
    redFlash();
    }

    // console.log(event.target.textContent);
    // console.log(JSON.stringify(questions[x].ans));


    x++;
    if (x>8 || timeLeft <= 0) {saveScore(); x = 0 }
    
    timeTrack(); //updates time immediately upon interaction
    pushQuestion(); //displays the updated questions

});

//should bring up scoreboard
function saveScore() {

    scoreboard.setAttribute("style", "display:flex;");
    outerdiv.setAttribute("style", "display:none;");

}

//constantly updates timer throught each function because I can
function timeTrack() {
    document.getElementById("timer").textContent = timeLeft;
}





function pushQuestion() {
    a0.innerText = questions[x].ans[0];                     //  This displays
    a1.innerText = questions[x].ans[1];                     //  the questions
    a2.innerText = questions[x].ans[2];                     //  and the
    a3.innerText = questions[x].ans[3];                     //  answers as
    content.innerText         = questions[x].q;             //  the array
    questionNumber.innerText  = questions[x].qn;            //  rotates  
}



// this is literally so complicated
function createSaves() {
    scoreList.innerHTML = "";

    for (var y = 0; y < scores.length; y++) {
        var savedscore = scores[y];

        var li = document.createElement("li");
        li.textContent = savedscore;
        li.setAttribute("data-index", y);
        li.setAttribute("style", "list-style-type:number");
        var points = document.createElement("h6");
        points.textContent = score * timeLeft;
        console.log("CreateSaves");
        scoreList.appendChild(li);
        
        // This baby sorts the scoreboard in reverse using the .sort  
        scores.sort().reverse(); //.reverse is an array method to reverse the order of the elements in an array
    }                   //when combined it sorts it in reverse which is awesome     both of these overwrite the origional array.
}

function pullSaves() {
    var savedSaves = JSON.parse(localStorage.getItem("scores"));

    if(savedSaves !== null) { //checks if there are already any saves in local storage
        scores = savedSaves; // if there is it loads them then it creates them reguardless or not they exist lol
    }
    console.log("pullSaves");
    createSaves();
}

function saveSaves() {
    localStorage.setItem("scores", JSON.stringify(scores));
    console.log("saveSaves");
}

sheet.addEventListener("submit", function(event){
    event.preventDefault();
                    //this is each scoreboard input with their name attached to their score
    var scorekeepr = " -    -! " + score * timeLeft + " !-   - " +scoreText.value.trim();

    console.log("sumbit");

    if (scorekeepr === "") {
        return;
    }

    scores.push(scorekeepr);
    scoreText.value = "";

    scores.sort().reverse();

    scoreText.setAttribute("style", "display:none;");
    createSaves();
    saveSaves();
})


////////////////////////////////////////////////////////////
pullSaves();                                    //this pulls the saves from local storage immediately on page load
////////////////////////////////////////////////////////////
startButton.addEventListener("click", begin);   //this event listener starts the whole thing
////////////////////////////////////////////////////////////
returnButton.addEventListener("click", function(){ //this reloads the page simulating a return to start
   window.location.reload() 
});
////////////////////////////////////////////////////////////
showButton.addEventListener("click", function(){ //this applies those attributes when the "Show Scores!" button is clicked
    scoreboard.setAttribute("style", "display:flex;");
    sheet.setAttribute("style", "display:none;");
    outerdiv.setAttribute("style", "display:none;");
});
////////////////////////////////////////////////////////////
function redFlash(){    //this function changes the time and clock to display a red flash used when a question is answered incorrectly
    var z = setInterval(function () {
var goat = clock.getAttribute("style");
console.log(goat);


        if (goat == "color:#31E1BD;" ){
            clock.setAttribute("style", "color:#E85971;");
            timer.setAttribute("style", "color:#E85971;");
        } else {
            clock.setAttribute("style", "color:#31E1BD;");
            timer.setAttribute("style", "color:#31E1BD;");

            clearInterval(z);
        }
        

        
    },150);
}
//////////////////////////////////////////////////////////