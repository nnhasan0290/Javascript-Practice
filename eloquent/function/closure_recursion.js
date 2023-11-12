//A function that reference variables from local scopes around it is called a closure

const sum = (n) => () => n + 10;

const fifth_sum = sum(10);

console.log(fifth_sum());

// A function that call itself is called recursive
