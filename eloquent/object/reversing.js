const reverseArr = (arr) => {
    let output_arr = []
    for(let i = arr.length - 1; i>=0; i--){
        output_arr.push(arr[i]);
    }
    return output_arr;
}

console.log(reverseArr(['A', 'B', 'C', 4]))