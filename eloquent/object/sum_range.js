//write the sum of the range

const range = (a, b) => {
    let range_arr = [];
    if(a> b){
        for(let i = a; i>=b ; i--){
            range_arr.push(i);
        }
    }else if( a < b){
        for(let i = a; i<=b; i++){
            range_arr.push(i);
        }
    }
    return range_arr;
}

const sum = (arr) => {
    return arr.reduce((a,b) => a+b,0)

}

console.log(sum(range(1, 5)));