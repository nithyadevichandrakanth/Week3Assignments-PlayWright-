function userProfile(name) {

    return`Hello ${name}`
    
}
console.log(userProfile(`Nithya Devi!`));
/*********************************************/
let double = (num) =>{

    return num *2;
}
console.log(double(25));
/*********************************************/
setTimeout(function(){
console.log("This message is delayed by 2 seconds");
2000
})
/******************************************** */
function getUserData(callBack) {

let username="Nithya";
let age=10;
console.log(callBack(username, age));
}
function details(username, age) {
   return `Username: ${username}, Age:${age}`;
}
setTimeout(function(){
    getUserData(details);
},3000)

