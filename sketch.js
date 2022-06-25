var /*a,*/cl = 0,ms = 0,cps = 0,cll = 0,h = 0,aa = [0,0,0,0,0,0,0,0,0,0],b = 0;
var ar = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*a = createButton('Click Me Please');
  a.position(width/2.5,height/1.5);*/
	document.oncontextmenu = ()=>{ return false; }
	colorMode(HSB,255,255,255,1);
  /*a.mousePressed(kawaiiWeeb);
  a.size(150,150);*/
	for(var i = 0;i<width;i++){
		ar[i] = 0;
	}
}

function draw() {
  frameRate(60);
  ms += 0.02;
  if(ms > 1){
    ms = 0;
    cps = cll;
    cll = 0;
    if(cps > h){
      h = cps
    }
    if(cps != 0){
      aa.splice(0,1);
      aa[9] = cps;
    }
    b = 0;
    d = 0
    for(var i = 0; i < 10;i++){
      b += aa[i];
      if(aa[i] != 0){
        d+=1;
      }
    }
    b = b/d;
    if(d == 0){
      b = 0;
    }
  }
  background(200);
  textSize(100);
  text('TOTAL CLICKS : '+cl,width/4,height/3);
  text('CPS : '+cps,width/4,height/2.3);
  text('HIGHEST CPS : '+h,width/4,height/1.9);
  text('AVERAGE CPS : '+round(b),width/4,height/1.6);

	ar.splice(0,1);
	ar.push(cps*25);
	var last = 0;
	strokeWeight(1);
	for(var i = 0;i < ar.length;i+=2){
		noFill();
		stroke(map(Number(ar[i]),0,Number(h),0,255),255,255);
		line(i,0,i,ar[i]);
	}
	strokeWeight(2.5);
	stroke(0);
	fill(25);
}

function kawaiiWeeb(){
  cl += 1;
  cll += 1;
}

function mousePressed(){
  kawaiiWeeb();
}