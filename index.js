/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister =`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastPart1 = part1.charAt(part1.length -1);
const lastPart2 = part2.charAt(part2.length -1);
const majPart1 = lastPart1.toUpperCase();
const majPart2 = lastPart2.toUpperCase();
const newPart1 = part1.slice(0, -1) + majPart1;
const newPart2 = part2.slice(0, -1) + majPart2;
const result = `${newPart1}${newPart2}`;
// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal*15/100;

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function generateRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
const randomNumber = generateRandomNumber(1,10);
// Print the generated random number
console.log(`${randomNumber}`)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
/*False*/
const expression2 = a || b;
/*True*/
const expression3 = !a && b;
/*False*/
const expression4 = !(a && b);
/*True*/
const expression5 = !a || !b;
/*True*/
const expression6 = !(a || b);
/*False*/
const expression7 = a && a;
/*True*/

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);