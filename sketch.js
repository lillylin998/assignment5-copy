let textInput;
let slide;
let b;
let submit;
let reset;
let divInput, divSlide;
let valText;
let valSlider = 12;
let texts = [];
let colorR = 255, colorG = 255, colorB = 255;
let defaultFont,font1,font2,font3;

function preload(){
    defaultFont = loadFont('Quicksand_Bold.otf');
    font1 = loadFont('KeeponTruckin.ttf');
    font2 = loadFont('Shaka Pow.ttf');
    font3 = loadFont('Mermaid1001.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
 // textFont(font1);

  b = createButton('change color');
    b.position(windowWidth/10, windowHeight-100);
    b.mousePressed(changeColor);
    b.style('font-family: defaultFont');
    b.style('border-radius: 10px');
    b.style('height: 25px');
    b.style('background-color: white');
    
  slide = createSlider(0,200,12,1);
    slide.position(windowWidth/3, windowHeight-100);
    slide.class('slider');
    
  divSlide = createDiv('change size');
    divSlide.style('font-family: defaultFont');
    divSlide.style('color: white');
    divSlide.position(windowWidth/3+5, windowHeight-75);
    
  textInput = createInput('');
    textInput.position(windowWidth/2-50,windowHeight/2);
    textInput.style('font-family: defaultFont');
    textInput.style('height: 15px')
    textInput.style('width: 150px');
    
  divInput = createDiv('write anything :)');
    divInput.style('font-family: defaultFont');
    divInput.style('color: white');
    divInput.position(windowWidth/2-50,windowHeight/2-25);
    
  submit = createButton('submit');
    submit.position(windowWidth/2+50, windowHeight/2+25);
    submit.mousePressed(getText)
    submit.style('font-family: defaultFont');
    submit.style('border-radius: 10px');
    submit.style('height: 20px');
    submit.style('background-color: white');

  reset = createButton('reset');
    reset.position(windowWidth*9/10, windowHeight-100);
    reset.mousePressed(resetScreen);
    reset.style('font-family: defaultFont');
    reset.style('border-radius: 10px');
    reset.style('height: 25px');
    reset.style('background-color: white');


}

function draw() {
  background(0);
  sliderVal();
  textDisplay();  

}


function getText(){
    valText = textInput.value();
    texts.push(new Word(valText, random(10,width/2),random(10,height/2),random(1,3),random(1000,2000)));
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

function resetScreen(){
    if (texts[0]){
        texts = [];
        colorR = 255;
        colorG = 255;
        colorB = 255;
    }
}


function reposition(){
    b.position(windowWidth/10, windowHeight-100);
    slide.position(windowWidth/3, windowHeight-100);
    divSlide.position(windowWidth/3+5, windowHeight-75);
    textInput.position(windowWidth/2-50,windowHeight/2);
    divInput.position(windowWidth/2-50,windowHeight/2-25);
    submit.position(windowWidth/2+50, windowHeight/2+25);
    reset.position(windowWidth*9/10, windowHeight-100);
}