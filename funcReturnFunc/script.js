const func_two = (func) => (a, b) => Promise.resolve(func(a,b)+3).catch((err)=> "data");

const func_one = func_two((a, b) => {
  return b - a;
});

console.log(func_one(6, 10));
