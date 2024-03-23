#! /usr/bin/env node

import inquirer from "inquirer";

// 1.computer will generate a random number

// 2.User input for guessing number

// 3.Compare user input with computer generated number and show result

const main = async () => {
    let playAgain = true;
    while (playAgain) {

    const randomNumber = Math.floor(Math.random() * 6 +1); //Generating a random number from 1 to 6
   
    console.log("👋 Welcome👋 to a Number Guessing Game 🔢");

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
  },
]);

console.log(`Your guess: ${answers.userGuessedNumber}, Correct answer: ${randomNumber}`);



if (answers.userGuessedNumber === randomNumber) {
    console.log("🎉Congratulations! you guessed right number✅.You win🎉");

}
else {
    console.log("😅 opps!You guessed wrong number❌.Try again!");
}
const { playAgainAnswer } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'playAgainAnswer',
      message: 'Do you want to play again?',
      default: true 
    
    
    }
  ]);
  playAgain = playAgainAnswer
  console.log("Thanks for playing. Goodbye!👋")

    }

}
main()























