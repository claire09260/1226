var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("God Rest Ye Merry Gentlmen - DJ Williams.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  music_btn = createButton("音樂播放")
music_btn.position(10,10)
music_btn.size(350, 100);
music_btn.style('background-color', 'blue');
music_btn.style('font-size', '44px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)
mouse_btn = createButton("暫停播放")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'pink');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)
  Speech_btn = createButton("語音辨識(動/不要動)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

}



function draw() {
  background("#a8dadc");
  textSize(20)
 text("x:"+mouseX+"  y:"+mouseY,50,50)//50,50的位置
//頭髮
 fill(0) 
	arc(643,320,322,401,QUARTER_PI+HALF_PI,QUARTER_PI,OPEN)
 
 //臉
 strokeWeight(5)
 fill("#fefae0")
 ellipse(650,300,200)

//瀏海
fill(0)
 arc(600,205,141,83,PI+QUARTER_PI+HALF_PI+QUARTER_PI/3,QUARTER_PI+HALF_PI,CHORD)
	arc(693+mouseX/150,219,60,40,QUARTER_PI,PI+QUARTER_PI,CHORD)

 //左眼
 strokeWeight(3)
 noFill()
 
 beginShape();
 curveVertex(568, 286)
 curveVertex(573, 275)
 curveVertex(573, 279)
 curveVertex(580, 270)
 curveVertex(600, 272)
 curveVertex(616, 289)
 curveVertex(573, 275)
 endShape();

 //右眼
 strokeWeight(3)
 beginShape();
 curveVertex(679, 290)
 curveVertex(671, 287)
 curveVertex(683, 273)
 curveVertex(701, 273)
 curveVertex(711, 279)
 curveVertex(718, 285)
 endShape();

//鼻子
 strokeWeight(5);
 beginShape();
 vertex(643,304)
 vertex(632+mouseX/150,311)
 vertex(644,316)
 endShape();

 //左腮紅
 strokeWeight(3);
 fill("#f28482")
 beginShape();
 vertex(570,328)
 vertex(580,316)
 vertex(582,327)
 vertex(589,315)
 vertex(596,324)
 endShape();
 //右腮紅
 strokeWeight(3);
 fill("#f28482")
 beginShape();
 vertex(707,319)
 vertex(717,309)
 vertex(718,309)
 vertex(716,319)
 vertex(728,310)
 vertex(730,323)
 endShape();

 //嘴
 strokeWeight(5);
 fill("#ef233c")
 beginShape();
 vertex(622,343)
 vertex(656,345)
 vertex(649,364)
 vertex(622,343)
	endShape();
  


}
//function mousePressed()
///\{
  //if(!songIsplay){
  //song.play()
  //songIsplay = true
 // amp=new p5.Amplitude()
  //}
  //else{
   // song.pause()
    ////songIsplay = false

  //}
//}
function music_btn_pressed(){
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()
  music_btn.style('background-color', 'blue');
  mouse_btn.style('background-color', 'pink');
  Speech_btn.style('background-color', 'black');
  }
  function mouse_btn_pressed(){
  song.pause()
      songIsplay = false
      music_btn.style('background-color', 'blue');
      mouse_btn.style('background-color', 'pink');
      Speech_btn.style('background-color', 'black');
  
  }
function Speech_btn_pressed(){
  music_btn.style('background-color', 'blue');
  mouse_btn.style('background-color', 'pink');
  Speech_btn.style('background-color', 'black');

}


