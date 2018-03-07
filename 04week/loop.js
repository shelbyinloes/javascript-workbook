// Complete each of the following exercises.

// for loop
    // Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ["Ford", "Dodge", "Audi", "Jeep", "Nissan"]
for (i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
}


// for...in loop
    // Create an object (an array with keys and values) called persons with the following data:
        // firstName: "Jane"
        // lastName: "Doe"
        // birthDate: "Jan 5, 1925"
        // gender: "female"
    // Use a for...in loop to console.log each key.
    // Then use a for...in loop and if state to console.log the value associated with the key birthDate.
const persons = {
    "firstName": "Jane",
    "lastName": "Doe",
    "birthDate": "Jan 5, 1925",
    "gender": "female"
}
//below code prints out bday 4 times
for (item in persons) {
    console.log(persons["birthDate"]);
  }


// while loop
    // Use a for loop to console.log the numbers 1 to 1000.
let count = 0;
while (count <= 1000) {
    console.log(count++);
}

// do...while loop
    // Use a do...while loop to console.log the numbers from 1 to 1000.
do {
    console.log(count++);
}while (count <= 10);


// When is a for loop better than a while loop?
    // How is the readability of the code affected?
//They both can achieve very similar things, with the main difference being syntax. 
//For loops can be helpful if you have a certain number of iterations.
//While loops may be good if you do not know how many iterations something will take.
//While loops are lighter on the syntax (more simple).  


// What is the difference between a for loop and a for...in loop?
//For...in is designed to loop through properties of an object. 
//For loops work best looping in arrays. 


// What is the difference between a while loop and a do...while loop?
//A while loop checks if the condition is true before executing any more code. 
//A do...while loop will execute before checking the condition. If the condition is true, it will contineu looping.