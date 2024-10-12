function factorial(n) {
    if (n<0) {
        console.log("The number is negative");
               
    }
    else{
let result=1;
    for (let index = 2; index <=n; index++) {
        
        result=result*index;
    }
    return result;
}
}
console.log(factorial(5));
