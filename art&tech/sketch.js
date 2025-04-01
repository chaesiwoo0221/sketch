let xPos = 0;
let xDir = 0;
let diam;
let yPos, yDir;
let speed;
let padX;
let padWidth = 100;


function setup(){
    createCanvas(400, 400);
    background(220);
    speed = 5;
    xPos = width / 2; //원이 캔버스 바깥으로 나가지 않도록 함.
    yPos = height / 2; //원이 캔버스 바깥으로 나가지 않도록 함.
    xDir = speed;
    yDir = speed;
    diam = 30; 
    
}

function draw(){
    //background(220);
    fill(255,0,0);
    ellipse(xPos, yPos, diam, diam);
    
    xPos = xPos + xDir; //x축으로 이동하는 속도
    yPos = yPos + yDir; //y축으로 이동하는 속도

}
