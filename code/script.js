// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt("What is your name?");
alert("Hi and welcome, "+ userName + "!");

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt("What would you like to order?\n" +
  "1. Pizza\n" +
  "2. Pasta\n" +
  "3. Salad\n\n" +
  "Enter the number of your choice:"
)

let food;

if (foodChoice === "1"){
  food = "Pizza";
} else if(foodChoice === "2"){
  food = "Pasta";
}else if(foodChoice === "3"){
  food = "Salad";
}else{
  food = "an unknown value";
}

alert("You have selected: " + food);
// Step 3 - Subtype choice
// Your code goes here

let subType;

if (food === "Pizza"){
  subType = prompt("Choose a pizza type:\n" +
    "1. Maragtitas\n" +
    "2. Pepperoni\n" +
    "3. Hawaii\n"
  );

  if (subType === "1") subType = "Margatitas Pizza";
  else if (subType === "2") subType = "Pepperoni Pizza";
  else if (subType === "3") subType = "Hawaii Pizza";

}else if (food === "Pasta") {
  subType = prompt("Choose a pasta type:\n" +
    "1. Bolognese\n" +
    "2. Carabonara\n" +
    "3. Pesto"
  );

  if (subType === "1") subType = "Bolognese Pasta";
  else if (subType === "2") subType = "Carabonara Pasta";
  else if (subType === "3") subType = "Pesto Pasta";

}else if (food === "Salad") {
  subType = prompt("Choose a salad type:\n" +
    "1. Ceasar\n" +
    "2. Greek\n" +
    "3. Garden"
  );

  if (subType === "1") subType = "Ceasar Salad";
  else if (subType === "2") subType = "Greek Salad";
  else if (subType === "3") subType = "Garden Salad";
}

alert("You have seleted: " + subType);


// Step 4 - Age
// Your code goes here
let age;

prompt("Is this food for a child or an adult? Type you age:")

let price;

if (age <= "15"){
  price = prompt("One child sized " + subType + " will be perpard for you. That'll be 10 euro. Are you sure you want to order this?\n " +
    "Enter a number to comfirm:\n" +
    "1 - Yes\n" +
    "2 - No"
  )

  if (price === "1"){
    alert("Thank you for your order! See you soon!");
  }else{
    alert("No problem, come back and order anytime you want");
  }

}else{
  price = prompt("One Adult sized " + subType + " will be perpard for you. That'll be 15 euro. Are you sure you want to order this?\n " +
    "Enter a number to comfirm:\n" +
    "1 - Yes\n" +
    "2 - No"
  )

  if (price === "1"){
    alert("Thank you for your order! See you soon!");
  }else{
    alert("No problem, come back and order anytime you want");
  }
}


// Step 5 - Order confirmation
// Your code goes here
