const myAtropos = Atropos({
  el: '.my-atropos',
     shadow: false,
     duration: 550,

});

const countDownDate = new Date("Feb 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
let timer = setInterval(function() {

  let now = new Date().getTime();
  let timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


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