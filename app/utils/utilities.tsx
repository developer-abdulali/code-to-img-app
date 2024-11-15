export const languages = [
  {
    name: "JavaScript",
    icon: "icons/js.png",
  },
  {
    name: "TypeScript",
    icon: "icons/ts.png",
  },
  {
    name: "HTML",
    icon: "icons/html.png",
  },
  {
    name: "CSS",
    icon: "icons/css.png",
  },
  {
    name: "Python",
    icon: "icons/python.png",
  },
  {
    name: "Java",
    icon: "icons/java.png",
  },
];

export const themes = ["monokai", "twilight", "terminal"];

export const backgrounds = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(140deg,rgb(255,207,115),rgb(255,122,47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg,rgb(142,199,251),rgb(28,85,170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg,rgb(165,142,251),rgb(233,191,248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",
];

export const initailCode = `function guessMyNumber() {
  const userGuess = prompt('Guess your number between 1 to 10');
  const secretNumber = Math.ceil(Math.random() * 10)

  if (userGuess === secretNumber) {
     alert('Congratulations! You guessed the number correctly!');
  } else {
    alert('Sorry, but the number was'+ secretNumber + '. Better luck next time!');
  }
}
console.log(guessMyNumber())`;
