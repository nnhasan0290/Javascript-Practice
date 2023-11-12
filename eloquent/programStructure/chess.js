//write a program to create a chess 8*8

let i = 1;

while (i<=8){
    let str = " ";
    for(let j = 1; j<=8; j++){
        if((i + j) % 2 === 0){
            str += "#"
        }else {
            str += " "
        }
    }
    console.log(str);
i++
}