function randomNum() {
  console.log(Math.round(Math.random() * 10));
}

const guessingGame = () => {
  const randomNumber = randomNum();
  for (i = 1; i <= 3; i++) {
    const girilenDeger = Number(prompt("Guess a Number between 1-10: "));
    if (girilenDeger === randomNumber) {
      alert("Success");
      return;
    } else if (i === 3) {
      alert("Sorry, you failed to guess the number in three attempts.");
      return;
    } else {
      alert(`Wrong That was  ${i}.  try`);
    }
  }
};

guessingGame();
