#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 20000;
let myPin: number = 1234;

// Q1 What is your hidden Pin number ?

let pinKey = await inquirer.prompt([
  {
    message: " please put your hidden number",
    type: "number",
    name: "key",
  },
]);
// which account do you have ?

if (pinKey.key === myPin) {
  let account = await inquirer.prompt([
    {
      message: "which is your account ",
      type: "list",
      choices: ["saving", "current"],
      name: "type",
    },
  ]);
  // Whould you like to operate ?
  let operate = await inquirer.prompt([
    {
      message: "whould your like to operate",
      type: "list",
      choices: ["Balance inquire", "Cash Withdraw", "Fast Cash"],
      name: "selected",
    },
  ]);
// your balance inquire is as under
  if (operate.selected === "Balance inquire") {
    console.log(` your total account balance is ${myBalance}`);
  } else if (operate.selected === "Cash Withdraw") {
    let withdraAns = await inquirer.prompt([
      {
        message: "please put your withdrawal amount here",
        type: "number",
        name: "cash",
      },
    ]);
    // your cash withdra as follow
    if (withdraAns.cash >= myBalance) {
      console.log("your have insufichant account balance");
    } else if (withdraAns.cash <= myBalance) {
      console.log(
        "your remaing account balance is " + (myBalance - withdraAns.cash)
      );
    }
  } 
  // you can bring out fast cash
  else if (operate.selected === "Fast Cash") {
    let fastAns = await inquirer.prompt([
      {
        message: "please chose your figer",
        type: "list",
        choices: ["500", "1000", "2500", "5000", "10000"],
        name: "fastwithdraw",
      },
    ]);
    if (fastAns.fastwithdraw === "500" || "2500" || "5000") {
      console.log(
        "your remaing account balance is " + (myBalance - fastAns.fastwithdraw)
      );
    }
  }
}
// wrong pin number 
else if (pinKey.key !== myPin){
    console.log( "please put your correct pin number")
}
