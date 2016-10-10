// Tic Tac Toe
var Agent = function () { //creating an agent object

}

/*Agent.prototype.selectMove = function(board) {
    var freeCells = [];
	//loop through all boards in the board and store all free ones in the freecells list
    for (var i = 1; i < 10; i++) {
        if (board.cellFree(i)) freeCells.push(i);
    }
	//return a random feee spot
	var returnNumber = freeCells[Math.floor(Math.random() * freeCells.length)];

	/*if (board.playerOne)
		console.log("Player one played X at " + returnNumber);
	else
		console.log("Player two played O at " + returnNumber);
    return returnNumber;
}*/

Agent.prototype.selectMove = function(board) {
    var freeCells = [];
	//loop through all boards in the board and store all free ones in the freecells list
    for (var i = 1; i < 10; i++) {
        if (board.cellFree(i)) freeCells.push(i);
    }

	//call a defendMethod
	var mode = block(board);
	if (mode > 0) {
		//console.log("Blocked play");
		return mode;
	} else {

		mode = attack(board);
		if (mode > 0) {
			return mode;
		}
		else {
			mode = setUp(board);
			return mode;
		}
	}
}

function setUp(board) {
	 var freeCells = [];
	//loop through all boards in the board and store all free ones in the freecells list
    for (var i = 1; i < 10; i++) {
        if (board.cellFree(i)) freeCells.push(i);
    }
	//return a random feee spot
	var returnNumber = freeCells[Math.floor(Math.random() * freeCells.length)];
	return returnNumber;
}

function attack(board){
	var array = [];
	if (board.playerOne)
		array = board.X;
	else
		array = board.O;

	for (var i = 0; i < array.length; i++) {
		for (var j = 1; j < array.length; j++) {
			var spot = 15 - (array[i] + array[j]);
			if (spot>0 && spot <10 && board.cellFree(spot)) {
				return spot;
			}
		}
	}
	return -1;
}

function block(board){
	var array = [];

	if (board.playerOne)
		array = board.O;
	else
		array = board.X;

	if (array.length > 0) {
		var b = array.length-1;
		var value = array[b];
		console.log("value "+value);
	}

	for(var i = 0; i < array.length;i++){
		 var k = 15 - (value + array[i]);
		if(k>0 && k < 10 && board.cellFree(k)){
			return k;
		}
	}
	return -1;
}
