// try {
//     console.log(5+a);
// } catch (error) {
//     console.log(error.message);
// }

Promise.resolve(console.log(5+b)).catch(err=> console.log(err.message))