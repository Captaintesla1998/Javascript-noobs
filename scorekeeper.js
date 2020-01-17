var b1=document.getElementById("p1");
var b2=document.getElementById("p2");
var b3=document.querySelector("#reset");
var userInput=document.querySelector("#maxscoreholder");
//spans selections
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var changer1=document.querySelector("#changer");

var p1score=0;
var p2score=0;

var gamefinish=false;
// var max=document.querySelector("#maxscoreholder");
// var maxscore=prompt("What is the maximum points to score?");
var winningScore=5;
b1.addEventListener("click",function(){
	if(!gamefinish){
		p1score++;
		if (p1score===winningScore){
			p1display.classList.add("green");
			gamefinish=true;
		}
		p1display.textContent=p1score;
	}
	
});
b2.addEventListener("click",function(){
	if(!gamefinish){
		p2score++;
	}
		if(p2score===winningScore){
			p2display.classList.add("green");
			gamefinish=true;
		}
	p2display.textContent=p2score;
})

b3.addEventListener("click",function(){
	p1display.classList.remove("green");
	p2display.classList.remove("green");
	var p1score=0;
	var p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	gamefinish=false;
})

userInput.addEventListener("change",function(){
	changer1.textContent=userInput.value;
	winningScore=Number(userInput.value);//userInput.value returns a string
})