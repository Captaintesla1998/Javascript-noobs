CHALLENGES SECTION 
//#Challenge 1- sameFrequency

function sameFrequency(num1,num2){
	let a = num1.toString();
	let b = num2.toString();
	if(a.length !== b.length) return false;
	var fc1= {};
	var fc2= {};
	for(let val of a){
		fc1[val] = (fc1[val] || 0) + 1;
	}
	for(let val of b){
		fc2[val] = (fc2[val] || 0) + 1;
	}
	for(let key in fc1){
		if(!(key in fc2)){
			return false;
		}

		if(fc1[key]!== fc2[key]){
			return false;
		} 
	}
	return true;
}

//#CHALLENGE2
function areThereDuplicates(){
	let collection = {};
	for(let val of arguments.toString()){
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for(let key in collection)
	{
		if(collection[key] > 1){
			return true;
		}
	}
}

//#CHALLENGE3
function isSubSequence(str1, str2){
	if(!str1) return true;
	let i=0;
	for(let j=0;j<str2.length;j++){
		if(str2[j] === str1[i]) i++;
		if(i===str1.length) return true;
	}
	return false;
}
