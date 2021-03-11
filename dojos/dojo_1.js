function fizzBuzz(start, end){
    let array =[];
    for (let i = start; i <= end; i++){
        if(i === 0){
            array.push(i.toString());
        }else if((i%3 === 0) && (i%5 === 0)){
            array.push("Fizzbuzz");
        }else if (i%3 === 0){
            array.push("Fizz");
        }else if(i%5 === 0){
            array.push("Buzz");
        }else{
            array.push(i.toString());
        }
    }
    return array;
}

let tableau = fizzBuzz(0,100);
console.log(tableau);