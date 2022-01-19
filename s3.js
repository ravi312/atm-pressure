var sliderH;
var sliderG;
var sliderT;
var sliderP;

var R=287.053;

var ho=8849;
var go=9.8;
var to=288;
var po=101.325;

var p;
var hx;
var py;

var s=1.25;
var ul=250;


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderH=createSlider(0,30000,8849,1);
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
  translate(width/2-150,height/2+100);
  sliderH.position(width/2+20-50, height/2+110);
  sliderG.position(width/2+20-50, height/2+130);
  sliderT.position(width/2+20-50, height/2+150);
  sliderP.position(width/2+20-50, height/2+170);
  stroke(255);
  textSize(10);
  stroke(255);
  strokeWeight(2 );
  p=po*Math.exp(-go*ho/(R*to));
  noStroke();
  textSize(12);
  strokeWeight(2);
  text('Height(m): '+ round(ho,1), 20, 20);
  text('g: '+ round(go,2), 20, 40);
  text('T: '+ round(to,2), 20, 60);
  text('Po: '+ round(po,1), 20, 80);
  text('Pressure (kPa) ', -90, -140);
  text(round(p,1), -60, -120);
 hx=map(ho,0,30000,0,10); 
 py= map (p,0,200,0,10);
 stroke(255,100);
 strokeWeight(6 );
 point(s*25*hx,-s*25*py);
 strokeWeight(2 );
 line(0, 0, ul*s, 0);
 stroke(255);
 line(0, 0, 0, -ul*s);
 stroke(255);
 
 for(var j=0;j>-ul*s;j-=25*s){
  line(1, j, -1, j);
}

for(var j=0;j>-ul*s;j-=41.6*s){
  line(-j, 1, -j, -1);
}


fill(50,220,220);
noStroke();
rect(-10, -(s*25*py), 10, 2);

stroke(255);
line(360,0,380,-50);
line(380,-50,390,-40);
line(390,-40,410,-90);
line(410,-90,430,0);
line(350,0,440,0);

fill(50,220,220);
noStroke(); 
rect(450, -2-(s*25*hx), 10, 2);
text('Mt Everest: ', 330, -80);
text('8849 m ', 330, -60);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}