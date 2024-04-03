 

function setup(){
  createCanvas(600, 600);
  background(200);
  frameRate(30);
  textSize(200);
} 
var tile = [];
var currentPlayer = "X"
var playerTilesTaken = {}

var tile0 = {
  leftX: 0,
  rightX: 200,
  leftY: 0,
  rightY: 200
}

function draw(){
  board();
  tileCoordinates();
}

function board(){
  fill(255);
  line(0,200,600,200);
  line(0,400,600,400);
  line(200,0,200,600);
  line(400,0,400,600)
}

function changePlayers(){
  if(currentPlayer === "X"){
    currentPlayer = "O"
  } else if(currentPlayer === "O"){
    currentPlayer = "X"
  }
}

function mouseReleased(){
  for(i = 0; i < 9; i++){
    tile[i].isClicked(mouseX, mouseY, i);
  }
}

function tileCoordinates(){
  for(var y = 0; y < 3; y++){
    for(var x = 0; x < 3; x++){
      var tileForConstructor = new tileConstructor(x * 200, x * 200 + 200, y * 200, y * 200 + 200);
      tile.push(tileForConstructor);
    }
  }
}

function tileConstructor(leftX, rightX, leftY, rightY){
  this.leftX = leftX;
  this.rightX = rightX;
  this.leftY = leftY;
  this.rightY = rightY;
  this.width = function(){
    return this.rightX - this.leftX;
  }
  this.height = function(){
    return this.rightY - this.leftY;
  }
  this.isClicked = function(mouseX, mouseY, i){
    if(mouseX > this.leftX && mouseX < this.rightX && mouseY > this.leftY && mouseY < this.rightY){
      console.log("mouse X is " + mouseX + "mouse Y is " + mouseY);
      console.log("clicked on box " + i);
      console.log(currentPlayer);
      changePlayers();
      text(currentPlayer,this.leftX + 25, this.leftY + 170);
    }
  }
}
