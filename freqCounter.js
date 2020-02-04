function sameCheck(arr1,arr2){
   if (arr1.length !== arr2.length){
       return false;
   }

   for(let val of arr1){
       let correctIndex = arr2.indexOf(val**2);
       if(correctIndex === -1){
           return false;
       }
       arr2.splice(correctIndex,1)
   }
   return true;
}
console.log(sameCheck([1,2,6,7,7],[49,49,1,4,36]))
// ----------------------------------------------------------
