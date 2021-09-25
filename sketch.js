var ball;
var database,positions,cookie
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    cookie=database.ref("ball/position")
    cookie.on("value",readposition)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
positions= data.val()
ball.x=positions.x
ball.y=positions.y

}

function changePosition(x,y){
    database.ref("ball/position").set({
        x:positions.x+x,y:positions.y+y
    })

}
