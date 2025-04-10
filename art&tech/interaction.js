let ironman = false;
let equipX1 = -50;
let equipX2 = 500;
let equipY = 0;
let goldY1 = 115;
let goldY2 = 150;
let goldY3 = 10;
let goldY4 = -73;
let goldY5 =-75;
let goldY6 =-90;
let lineY = 10;
let eyeY = -30;
let startTime;
let r;
let g;
let b;
let chestY1 = 355;
let chestY2 = 355;
let chestY3 = 355;
let chestY4 = 355;
let aimX = 10000;
let aimY = 10000;
let hand = false;

function setup() {
  createCanvas(400, 400);
  
  startTime = millis();
  r = 0;
  g = 255;
  b = 255;
}

function draw() {
  background(255);

  if (ironman) {
    no_ironman();
    equip_ironman();

    if(equipX1 <= 80) equipX1 += 3;
    if(equipX2 >= 320) equipX2 -= 3;
    if(millis() - startTime > 2000){
      if (chestY3 <= 400) chestY3 += 1;
      if (chestY4 <= 400) chestY4 += 1;
    }
    
    
    if(millis() - startTime > 6000){  
      if (equipY <= 200) equipY += 3;
      if (goldY1 <= 315) goldY1 += 3;
      if (goldY2 <= 350) goldY2 += 3;
      if (goldY3 <= 330) goldY3 += 3;
      if (goldY4 <= 180) goldY4 += 3;
      if (goldY5 <= 175) goldY5 += 3;
      if (goldY6 <= 114) goldY6 += 3;
      if (lineY <= 328) lineY += 3;
      if (eyeY <= 230) eyeY += 3;
    }
    if(hand == true){
      fill(255, 0, 0);
      ellipse(mouseX -23, mouseY - 30, 15, 50);
      ellipse(mouseX -5, mouseY - 35, 15, 50);
      ellipse(mouseX +8, mouseY - 38, 15, 50);
      ellipse(mouseX +23, mouseY - 30, 15, 50);
      ellipse(mouseX + 30, mouseY - 5, 50, 15);
      ellipse(mouseX, mouseY, 65, 70);
      fill(r, g, b);
      ellipse(mouseX, mouseY, 30, 30);
      
      
      
      
    }
  }

  
  else {
    no_ironman(); 
  }
}
  
  
  
  
 
  
 


  function no_ironman(){
    //몸
    noStroke();
    fill(255, 224, 189);
    rect(200, 350, 50, 20); // 목
    fill(100);
    rect(200, 380, 200, 50); //몸
    
    fill(0,255,255);
    stroke(0);
    ellipse(200, 400, 40, 40);
    strokeWeight(1);
    ellipse(200, 400, 20, 20);
    
    // 얼굴 
    fill(255, 224, 189);
    noStroke();
    strokeWeight(2);
    arc(200, 250, 200, 200, 0, PI, CHORD);
    quad(100,250, 300, 250,300, 216, 100, 216);
    
    // 귀 
    fill(255, 224, 189);
    arc(100, 250, 40, 40, radians(80), radians(270)); // 왼쪽 귀
    arc(300, 250, 40, 40, radians(270), radians(100)); // 오른쪽 귀
  
    // 눈   
    fill(0);
    ellipse(160, 245, 20, 20);
    ellipse(240, 245, 20, 20);
    
    //안경
    noFill();
    stroke(0);
    let x1 = 126;
    let y1 = 223;
    let x2 = 134;
    let y2 = 265;
    let x3 = 185;
    let y3 = 265;
    let x4 = 185;
    let y4 = 223;
    
    
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
    curve(x3, y3, x2, y2, x1, y1, x4, y4);
    curve(x1, y1, x3, y3, x4, y4, x2, y2);
    bezier(x1, y1,128, 218, 186, 218, x4, y4);
    
    let rx1 = 400 - x4;
    let ry1 = y4;
    let rx2 = 400 - x3;
    let ry2 = y3;
    let rx3 = 400 - x2;
    let ry3 = y2;
    let rx4 = 400 - x1;
    let ry4 = y1;
    
  

    curve(rx1, ry1, rx2, ry2, rx3, ry3, rx4, ry4);
    curve(rx3, ry3, rx2, ry2, rx1, ry1, rx4, ry4);
    curve(rx1, ry1, rx3, ry3, rx4, ry4, rx2, ry2);
    bezier(rx1, ry1, 218, 218, 275, 218, rx4, ry4);

    line(192, 241, 208, 241);
    line(278, 237, 299, 230);
    line(120, 237,100, 229);
  
    // 입
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(200, 280, 50, 20, 0, PI, OPEN);
    
    //머리
    fill(255, 224, 189);
    arc(200, 216, 200, 200, PI, 0);
    fill(0);
    arc(200, 216, 200, 200, PI, radians(280));
    arc(218, 218, 158, 200, radians(270), radians(0));
    rectMode(CENTER);
    rect(216,140, 25, 20);
    rect(216,130, 25, 20);
    

  }
  
  //슈트 착용
  function equip_ironman(){
    fill(240, 0, 0);
    rect(equipX1, 380, 80, 50);
    rect(equipX2, 380, 80, 50);
    
    quad(100, chestY1, 300, chestY2, 300, chestY3, 100, chestY4);
    
    
    fill(0,255,255);
    stroke(0);
    ellipse(200, 400, 40, 40);
    strokeWeight(1);
    ellipse(200, 400, 20, 20);
    
    
    
    
    //헬멧
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(200, equipY + 30, 242,292);
    stroke(255, 0, 0);
    strokeWeight(40);
    
    ellipse(200, equipY + 30, 200, 250);
    strokeWeight(5);
    stroke(255, 204, 51);
    fill(255, 204, 0);
    
    quad(145, goldY1, 255, goldY1, 260, goldY2, 140, goldY2);
    quad(144, goldY3, 255, goldY3, 300, goldY4, 100, goldY4 ); //마스크
    quad(102, goldY5, 150, goldY6, 250, goldY6, 298, goldY5); // 이마 마스크
    
    stroke(0);
    line(143, lineY,257, lineY);
    fill(51, 204, 255);
    rect(155, eyeY, 50, 25);
    rect(245, eyeY, 50, 25);
    
    
    
  }
  function mouseClicked(){
    if(ironman){
      r = random(0, 255);
      g = random(0,255);
      b = random(0,255);
      
      
  
    }
}
function keyPressed(){
  if(keyCode == ENTER){
    ironman =true;
  }
  if (keyCode == ESCAPE){
    ironman = false;
    hand = false;
    equipY = 0;
    goldY1 = 115;
    goldY2 = 150;
    goldY3 = 10;
    goldY4 =-73;
    goldY5 =-75;
    goldY6 =-90;
    lineY=10;
    eyeY = -40;
    equipX1 = -50;
    equipX2 = 500;
    
      
    
  }
  if(key == 'h'){
    r = 0;
    g = 255;
    b = 255;
    hand = true;
  }
  if(key == 's'){
    saveGif('interaction', 10);
  }

 
 }  

  



