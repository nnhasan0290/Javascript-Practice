const every = (arr, func) => {
     for(let val of arr){
        return func(val)
     }
}


console.log(every([5, 6, 7, 8], (n) => n >= 5 ))