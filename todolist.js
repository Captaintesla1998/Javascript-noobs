//html
<!DOCTYPE html>
<html>
<head>
	<title>New html</title>
	<script type="text/javascript" src="first.js"></script>

</head>
<body>
<h1>This is a drill</h1>
<h3>TO-DO list</h3>
<ul>
	<li>"new":add a todo</li>
	<li>"list": list all todos</li>
	<li>"quit" : quit app</li>
	<li>"Delete" : removes a todo provided an index</li>
</ul>

</body>
</html>

//js
window.setTimeout(function(){
	var todos = ["Buy spices!"];
	var input = prompt("what would you like to do?");
while(input !== "quit"){
	if (input === "list"){
		console.log("************");
		todos.forEach(function(el,ind){
			
			console.log(ind + " : " + el);
			
		})
		console.log("************");
	}
	else if(input === "new"){
		var newtodo = prompt("Enter the item!");
		todos.push(newtodo);
	}
	else if(input === "delete"){
		var index = prompt("Enter the index of element to be deleted");
		todos.splice(index,1);
	}

	input = prompt("what would you like to do?");
}
console.log("OK, Quit app!");
	

},500)
