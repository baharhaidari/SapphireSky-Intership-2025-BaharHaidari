// Menu-Based ATM System
// Display a menu with options:
// 1 → Check Balance
// 2 → Withdraw Money
// 3 → Deposit Money
// 4 → Exit
// Use switch to perform the correct action based on the user’s choice.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let balance = 1000;

function atmSystem() {
  console.log("\nWelcome to the ATM System!");

  rl.question(
    "1 → Check Balance\n2 → Withdraw Money\n3 → Deposit Money\n4 → Exit\n\nEnter your choice (1-4): ",
    (choice) => {
      switch (choice) {
        case "1":
          console.log(`Your current balance is $${balance}.`);
          rl.close();
          break;

        case "2":
          rl.question("Enter amount to withdraw: $", (withdrawAmount) => {
            withdrawAmount = parseFloat(withdrawAmount);
            if (withdrawAmount <= balance) {
              balance -= withdrawAmount;
              console.log(
                `You have withdrawn $${withdrawAmount}. Your new balance is $${balance}.`
              );
            } else {
              console.log("Insufficient balance.");
            }
            rl.close();
          });
          break;

        case "3":
          rl.question("Enter amount to deposit: $", (depositAmount) => {
            depositAmount = parseFloat(depositAmount);
            balance += depositAmount;
            console.log(
              `You have deposited $${depositAmount}. Your new balance is $${balance}.`
            );
            rl.close();
          });
          break;

        case "4":
          console.log("Thank you for using the ATM. Goodbye!");
          rl.close();
          break;

        default:
          console.log("Invalid choice! Please choose a valid option (1-4).");
          rl.close();
          break;
      }
    }
  );
}

atmSystem();
