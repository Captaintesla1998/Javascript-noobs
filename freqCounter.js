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
// O(n^2)


// 1)FREQUENCY COUNTER

// ----------------------------------------------------------
function sameCheck2(arr1,arr2){
    if (arr1.length !== arr2.length){
       return false;
   }
   
   var frequencycounter1= {};
   var frequencycounter2= {};
   for(let val of arr1){
      frequencycounter1[val] = (frequencycounter1[val] || 0) + 1
   }
   for(let val of arr2){
      frequencycounter2[val] = (frequencycounter2[val] || 0) + 1
   }
   console.log(frequencycounter1);
   console.log(frequencycounter2);
   for(let key in arr1){
      if(!(key**2) in frequencycounter2){
         return false
      }
      if(frequencycounter2[key**2] !== frequencycounter1[key]){
         return false
      }
   }
   return true
}

// 2)MULTIPLE POINTER TECHNIQUE

function  countUniques(arr){
   if(arr.length ===0) return 0;
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}


// 3) SLIDING WINDOW PATTERN -- looking for a subset which is contitnuous in some way



