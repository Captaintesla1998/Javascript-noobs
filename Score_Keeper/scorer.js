var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var teddy = document.querySelector("input");
var winningScoreUpdate = document.querySelector("#winningScoreUpdate");

var p1score = 0;
var p2score = 0;

var firstplayer = document.querySelector("#firstplayer");
var secondplayer = document.getElementById("secondplayer");

var GameOver = false;
var WinningScore = 5;

player1.addEventListener("click", function(){
	if(!GameOver){
	p1score++;	
	}
	if(p1score === WinningScore){
		firstplayer.classList.add("green");
		GameOver = true;

	}
	firstplayer.textContent = p1score; 
}); 

player2.addEventListener("click", function(){
	if(!GameOver){
	p2score++;	
	}
	if(p2score === WinningScore){
		secondplayer.classList.add("green");
		GameOver = true;
	}
	secondplayer.textContent = p2score;
});

reset.addEventListener("click",function(){
	reset();
})
function reset(){
	p1score = 0;
	p2score = 0;
	firstplayer.textContent = p1score;
	secondplayer.textContent = p2score;
	firstplayer.classList.remove("green");
	secondplayer.classList.remove("green");
	GameOver = false;
}

teddy.addEventListener("click",function(){
	winningScoreUpdate.textContent = teddy.value;
	WinningScore = Number(teddy.value);
	reset();
})