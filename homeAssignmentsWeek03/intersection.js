function intersection(arr1, arr2){
    let newArray=[];
for (let i = 0; i < arr1.length; i++) {
   
    for (let j = 0; j < arr2.length; j++) {
     
   if(arr1[i]===arr2[j]){
    newArray.push(arr1[i])
   }
}
}
return newArray;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 7, 8];
console.log(intersection(arr1,arr2));


    