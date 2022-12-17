"use strict";

// let sum = "";
// let age = +prompt("Enter a N value");
// const nice = function (age) {
//   for (let i = 2; i <= age; i++) {
//     if (i % i === 0 && i % 1 === 0) {
//       sum = sum + `${i}...`;
//     }
//   }
//   return sum;
// };
// console.log(nice(age));
// document.querySelector(".message").textContent = "kkkkk";
// document.querySelector(".number").textContent = secretNumber;
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (guess == 0) {
    document.querySelector(".message").textContent = "Number not exist";
  } else if (guess == undefined) {
    document.querySelector(".message").textContent = "No number 🦓";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "winner 🙄";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    if (score === 20) {
      document.querySelector("h1").textContent = "you're absolutely chad";
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lose the game";
    }
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "Too low";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = " You lose the game";
    //   }
    // } else if (guess === 0) {
    //   document.querySelector(".message").textContent = "Number not exist";
    // }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").textContent = "12";
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage("⛔️ No number!");

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage("🎉 Correct Number!");
//     document.querySelector(".number").textContent = secretNumber;

//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage("💥 You lost the game!");
//       document.querySelector(".score").textContent = 0;
//     }
//   }

//   //   // When guess is too high
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📈 Too high!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }

//   //   // When guess is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📉 Too low!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });
