//step 1: Personalized Greeting Message
let firstName = prompt("Input your first name only:  ");
if(!firstName.trim()){
    firstName = "Guest";
}
//Step 2: Writing the welcome message using alert()
alert("Welcome to EatNow Cafe: " + firstName);

//Step 3: Displaying the menu item
console.log("EatNow Cafe Menu")

let menuItems = ["Fries and Chicken" , "Chapati","Pilau","Snack Platter","Fruit Bowl"]
for (let i=0; i<menuItems.length;i++){
    console.log(i + 1 + "." + menuItems[i])
}

//Step 4: Adding the new dish
let newDish = prompt("What dish would you suggest to bw added to the menu?")
if(newDish.trim()){
    menuItems.push(newDish)
    console.log("Thank you for your input. Here's the updated Menu")
    for(let i = 0; i<menuItems.length;i++){
        console.log(i + 1 + "." + menuItems[i])
    }
}
//Dish not added
else
    console.log("Dish could not be added. Try again")
