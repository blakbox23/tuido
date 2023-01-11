

const myAtropos = Atropos({
  el: '.my-atropos',
     shadow: false,

});


// Set the date we're counting down to
const countDownDate = new Date("Feb 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
let timer = setInterval(function() {

  // Get todays date and time
  let now = new Date().getTime();

  // Find the timeLeft between now an the count down date
  let timeLeft = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in an element with id="timer"
//   document.getElementById("timer").innerHTML = days + "d  " + hours + "h  "
//   + minutes + "m  " + seconds + "s  ";

  document.getElementById("days").innerHTML = days + "d"
  document.getElementById("hours").innerHTML = hours + "h"
  document.getElementById("minutes").innerHTML = minutes + "m"
  document.getElementById("seconds").innerHTML = seconds + "s"


  // If the count down is finished, write some text
  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000); 