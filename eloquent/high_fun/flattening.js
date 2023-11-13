const flattening = (arr) => {
    return arr.reduce((a,b) => [...a, ...b], [])
}

console.log(flattening([[1,2,3], [4,5]]));