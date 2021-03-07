var ball1;
var database;
var position;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball1=createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    var ball1Position = database.ref('ball/position')
    ball1Position.on("value",readPosition,showError)
}

function draw(){
    background("white");
   if (keyDown(LEFT_ARROW)){
       writePosition(-1,0)
   }
   if (keyDown(RIGHT_ARROW)){
    writePosition(1,0)
}
if (keyDown(DOWN_ARROW)){
    writePosition(0,1)
}
if (keyDown(UP_ARROW)){
    writePosition(0,-1)
}
    
    drawSprites();
}
function readPosition(data){
    position = data.val()
    console.log(position.x)
    ball1.x = position.x
    ball1.y = position.y
}
function showError(){
    console.log("error")
}
function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y
    })
}

