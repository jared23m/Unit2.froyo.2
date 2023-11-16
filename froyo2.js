// Prompt the user for input
const userInputString = prompt(
    "Please enter some flavors separated by commas."
  );

// Parse it into an array of strings
const stringArray = userInputString.split(",");


// Create empty object to store flavors
const flavorCollection = {

}

// flavorIndexer function organizes flavors
function flavorIndexer(flavorInput, flavorOutput){

    // Loop iterates through the parsed input of strings
    for (const i in flavorInput){

            /* If property does not already exist, create property and
            set value (amount) to 1. If property does already exist,
            add 1 to the value (amount) */
            if (flavorOutput[flavorInput[i]] === undefined){
                flavorOutput[flavorInput[i]] = 1;
            } else {
                flavorOutput[flavorInput[i]]++;
            }
    }

    // returns the object with the correct data
    return flavorOutput;
}

// prints all the information
console.log("Here is the table of flavors:")
console.table(flavorIndexer(stringArray, flavorCollection));