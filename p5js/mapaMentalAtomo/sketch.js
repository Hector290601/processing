let f1, f2, f3, f4, f5;
function preload() {
  f1 = loadFont('ChelaOne-Regular.ttf ');
  f2 = loadFont('DobkinPlain.ttf ');
  f3 = loadFont('GrandHotel-Regular.otf  ');
  f4 = loadFont('Rancho-Regular.ttf  ');
  f5 = loadFont('Pacifico.ttf ');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB);
}
function draw() {
  background(windowWidth, windowHeight/23,((windowWidth+windowHeight)/3));
  translate(-windowWidth/2, -windowHeight/2);
  textAlign(CENTER, CENTER);
  inicio();
if(mouseX<=windowWidth/2 && mouseX >= 0 && mouseIsPressed && mouseButton == LEFT){
  if(mouseY<=windowHeight/2 && mouseY >= 0){
    dltn();
  }else if(mouseY <= windowHeight && mouseY >= windowHeight/2){
    rtfd();
  }
  }else if(mouseX <= windowWidth && mouseX >= windowWidth/2 &&  mouseIsPressed && mouseButton == LEFT){
  if(mouseY<=windowHeight/2 && mouseY >= 0){
    thms();
  }else if(mouseY <= windowHeight && mouseY >= windowHeight/2){
    bhr()
  }
  }
}
function inicio(){
  for(var a =0; a <500; a++){
    fill(random(0,255));
    ellipse(random(windowWidth),random(windowHeight),2,2);
  }
  fill(0);
  textFont(f1, 32);
  text("Mapa Mental", windowWidth / 2, windowHeight / 2);
  text("Autor: Héctor Robles", windowWidth / 2, windowHeight - 200);
  textFont(f2, 32);
  text("Dalton", 2 * windowWidth / 8, 2 * windowHeight / 8);
  textFont(f3, 32);
  text("Thomson", 6 * windowWidth / 8, 2 * windowHeight / 8);
  textFont(f4, 32);
  text("Rutherford", 2 * windowWidth / 8, 6 * windowHeight / 8);
  textFont(f5, 25);
  text("Bohr", 6 * windowWidth / 8, 6 * windowHeight / 8);
}
function dltn(){
  background(28, 98, 174);
  textFont(f2, 40);
  textAlign(CENTER, CENTER);
  text("DALTON", 4*windowWidth / 8, windowHeight/8);
  textFont(f2, 32);
  textAlign(LEFT, CENTER);
  text(".-Solido", 2*windowWidth / 8, 2 * windowHeight/8);
  text(".-Indivisible", 2*windowWidth / 8, 3 * windowHeight/8);
  text("**Bola de billar**", 2*windowWidth / 8, 4 * windowHeight/8);
  push();
    translate(4*windowWidth / 8, 6 * windowHeight/8);
    rotateZ(radians(2*frameCount));
    fill(255, 255, 0);
    noStroke();
    sphere(windowWidth / 10, 24, 24)
  pop();
}
function thms(){
  background(189, 28, 198);
  textFont(f3, 40);
  textAlign(CENTER, CENTER);
  text("THOMSON", 4*windowWidth / 8, windowHeight/8);
  textFont(f3, 32);
  textAlign(LEFT, CENTER);
  text(".-Sin masa", 2*windowWidth / 8, 2 * windowHeight/8);
  text(".-Divisible", 2*windowWidth / 8, 3 * windowHeight/8);
  text("**Panqué**", 2*windowWidth / 8, 4 * windowHeight/8);
  push();
    translate(4*windowWidth / 8, 6 * windowHeight/8);
    rotateZ(radians(2 * frameCount));
    rotateX(radians(2 * frameCount));
    rotateY(radians(2 * frameCount));
    fill(255, 255, 0);
    noStroke();
    sphere(windowWidth / 10, 24, 24);
    translate(windowWidth/10, (windowHeight/10)-windowWidth / 50);
    fill(0, 0, 255);
    sphere(windowWidth / 50, 24, 24);
  pop();

}
function rtfd(){
  background(192, 93, 89);
  textFont(f4, 40);
  textAlign(CENTER, CENTER);
  text("RUTHERFORD", 4*windowWidth / 8, windowHeight/8);
  textFont(f4, 32);
  textAlign(LEFT, CENTER);
  text(".-Vacío", 2*windowWidth / 8, 2 * windowHeight/8);
  text(".-Masa positiva en el centro", 2*windowWidth / 8, 3 * windowHeight/8);
  text(".-Electrones girando entorno al núcleo", 2*windowWidth / 8, 4 * windowHeight/8);
  text("**Planetario**", 2*windowWidth / 8, 5 * windowHeight/8);
  push();
    translate(4*windowWidth / 8, 6 * windowHeight/8);
    rotateZ(radians(2 * frameCount));
    noFill();
    stroke(255, 255, 0);
    sphere(windowWidth / 25, 24, 24);
    fill(0, 0, 255);
    noStroke();
    translate(-random(1,3)*windowWidth/10, random(1,3)*(windowHeight/10)-windowWidth / 50);
    sphere(windowWidth / 50, 24, 24);
    translate(random(1,3)*-3*windowWidth/10, random(1,3)*(windowHeight/10)-windowWidth / 50);
    sphere(windowWidth / 50, 24, 24);
  pop();
}
function bhr(){  
  background(20, 216, 190);
  textFont(f5, 40);
  textAlign(CENTER, CENTER);
  text("BOHR", 4*windowWidth / 8, windowHeight/8);
  textFont(f5, 32);
  textAlign(LEFT, CENTER);
  text(".-Giran al rededor del átomo", 2*windowWidth / 8, 2 * windowHeight/8);
  text(".-Cada órbita tiene un", 2*windowWidth / 8, 3 * windowHeight/8);
  text("número definido de energía", 2*windowWidth / 8, 4 * windowHeight/8);
  text(".-Las órbitas permitidas son", 2*windowWidth / 8, 5 * windowHeight/8);
  text("donde el momento es angular", 2*windowWidth / 8, 6 * windowHeight/8);
  text("**Planetario**", 2*windowWidth / 8, 7 * windowHeight/8);
  push();
    translate(6*windowWidth / 8, 5 * windowHeight/8);
    rotateZ(radians(2 * frameCount));
    noFill();
    stroke(255, 255, 0);
    sphere(windowWidth / 25, 24, 24);
    fill(0, 0, 255);
    noStroke();
    translate(windowWidth/10, (windowHeight/10)-windowWidth / 50);
    sphere(windowWidth / 80, 24, 24);
    translate(windowWidth/10, -(windowHeight/10)-windowWidth / 50);
    sphere(windowWidth / 80, 24, 24);
  pop();
}
//.