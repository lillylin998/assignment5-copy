let textInput;
let slide;
let b;
let submit;
let valText;
let valSlider = 12;
let texts = [];
let colorR = 255, colorG = 255, colorB = 255;
let font;
let x=10;
let y=10;

function preload(){
    font = loadFont('KeeponTruckin.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);

  b = createButton('change color');
    b.position(windowWidth/2, windowHeight-100);
    b.mousePressed(changeColor);
  slide = createSlider(0,200,12,1);
    slide.position(windowWidth/2, windowHeight-75);
  textInput = createInput('');
    textInput.position(windowWidth/2,windowHeight/2);
   // textInput.input(textDisplay);
  submit = createButton('submit');
    submit.position(windowWidth/2, windowHeight/2+20);
    submit.mousePressed(getText)
}

function draw() {
  background(0);
  drawStars();
  sliderVal();
 // submit.mousePressed(textDisplay)
  textDisplay();
  

}

function drawStars(){
    
}

function getText(){
    valText = textInput.value();
    texts.push(valText);
  //  fill(255)
  //  text(texts[0], 10,10);
  //  print(valText);
}

function textDisplay(){
    if (texts[0]){
        //x=random(0,10)
        for(let i of texts){
        fill(colorR,colorG,colorB);
        textSize(valSlider)
        rotateX(millis()/1500);
        rotateZ(millis()/1780);
        //translate(x,y);
        text(i,x,y);
       // print('hello');
           // x+= random(10,20);
           // y+= random(10,20);
        }
    }
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    reposition();
}


function sliderVal(){
    valSlider = slide.value();
}

function changeColor(){
    colorR = random(0,255);
    colorG = random(0,255);
    colorB = random(0,255);
}


function reposition(){
    b.position(windowWidth/2, windowHeight-100);
    slide.position(windowWidth/2, windowHeight-75);
    textInput.position(windowWidth/2,windowHeight/2);
    submit.position(windowWidth/2, windowHeight/2+20);
}