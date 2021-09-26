
//this is my variable bank, where I store my precious variables
var startButton     = document.querySelector("#startButton");
var answerButton    = document.querySelectorAll("button");
var answers         = document.querySelector("#answers");
var content         = document.querySelector("#content");
var questonNumber   = document.querySelector("#top")
var timer           = document.querySelector("#timer")



//------------------------------------------------------------------//
//countdown function using set interval and clear interval          //
// timer.textContent = 0;

startButton.addEventListener("click", function() {
    var timeLeft = 60;
    var timer = setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timerLeft--;
        } else {
            timer.textContent = "";
            console.log(TIMERrANoUT);
            clearInterval(timer);
        }
    },1000);
});
//------------------------------------------------------------------//

// questions = {
//     questionNumber
// }





