//Write a program that console.log to print all the numbers
let i = 1;

while(i<=100){
    let output = "";
    if(i%3 === 0) output += "Fizz";
    if(i%5 === 0) output += "Buzz";
    console.log(output || i);
    i++;
};