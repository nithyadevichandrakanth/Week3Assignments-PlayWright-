let conditionalPromise = new Promise((resolve, reject)=>{

if (Math.random()<0.5) {
    
    resolve("The number is greater than 0.5");
}else{

    reject("The number is less than 0.5")
}})
conditionalPromise
.then(result=>{
    console.log(result);
})

.catch(error=>{
    console.log(error);
})