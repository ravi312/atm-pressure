var sliderH;
var sliderG;
var sliderT;
var sliderP;

var R=287.053;

var ho=8830;
var go=9.8;
var to=288;
var po=101.325;

var p;
var hx;
var py;


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderH=createSlider(0,30000,8830,1);
  sliderG=createSlider(3,15,9.8,0.1);
  sliderT=createSlider(248,320,288,1);
  sliderP=createSlider(0,200,101.325,0.1);
}

function draw() {
 

  background(51,28);
  ho=sliderH.value();
  go=sliderG.value();
  to=sliderT.value();
  po=sliderP.value();
  translate(width/2-100,height/2+100);
  sliderH.position(width/2+20, height/2+110);
  sliderG.position(width/2+20, height/2+130);
  sliderT.position(width/2+20, height/2+150);
  sliderP.position(width/2+20, height/2+170);
  stroke(255);
  textSize(10);
  stroke(255);
  strokeWeight(2 );
  p=po*Math.exp(-go*ho/(R*to));
  noStroke();
  textSize(12);
  strokeWeight(2);
  text('Height(m): '+ round(ho,1), 30, 20);
  text('g: '+ round(go,2), 30, 40);
  text('T: '+ round(to,2), 30, 60);
  text('Po: '+ round(po,1), 30, 80);
  text('Pressure (kPa) ', -90, -140);
  text(round(p,1), -60, -120);
 hx=map(ho,0,30000,0,10); 
 py= map (p,0,200,0,10);
 stroke(255,100);
 point(25*hx,-25*py);
 line(0, 0, 250, 0);
 stroke(255);
 line(0, 0, 0, -250);
 stroke(255);
 
 for(var j=0;j>-250;j-=25){
  line(1, j, -1, j);
}

for(var j=0;j>-250;j-=41.6){
  line(-j, 1, -j, -1);
}


fill(0,200,200,200);
noStroke();
rect(-10, -(25*py), 10, 2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}