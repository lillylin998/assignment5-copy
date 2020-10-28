let textInput;
let slide;
let b;
let submit;
let valText;
let valSlider = 12;
let texts = [];
let colorR = 255, colorG = 255, colorB = 255;
let defaultFont,font1,font2,font3;
let x=10;
let y=10;

function preload(){
    defaultFont = loadFont('Quicksand_Bold.otf');
    font1 = loadFont('KeeponTruckin.ttf');
    //font2 = loadFont('Quicksand_Bold.otf');
    //font3 = loadFont('');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
 // textFont(font1);

  b = createButton('change color');
    b.position(windowWidth/2, windowHeight-100);
    b.mousePressed(changeColor);
  slide = createSlider(0,200,12,1);
    slide.position(windowWidth/2, windowHeight-75);
  textInput = createInput('');
    textInput.position(windowWidth/2,windowHeight/2);
  submit = createButton('submit');
    submit.position(windowWidth/2, windowHeight/2+20);
    submit.mousePressed(getText)
}

function draw() {
  background(0);
  drawStars();
  sliderVal();
  textDisplay();
    push();
    textFont(defaultFont);
    textSize(20)
    fill(255);
    text('change size', 0, 180);
    pop();
  

}

function drawStars(){
    
}

function getText(){
    valText = textInput.value();
    //texts.push(valText);
    texts.push(new Word(valText, random(10,width/2),random(10,height/2),1,random(1000,1500)));
}

function textDisplay(){
    if (texts[0]){
        for(let i of texts){
            i.display();
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