let textInput;
let slide;
let b;
let submit;
let valText;
let texts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = createButton('change color');
    b.position(windowWidth/2, windowHeight-100);
  slide = createSlider(0,200);
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
        for(let i of texts){
        fill(255)
        text(i,10,10);
       // print('hello');
        }
    }
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    reposition();
}

function reposition(){
    b.position(windowWidth/2, windowHeight-100);
    slide.position(windowWidth/2, windowHeight-75);
    textInput.position(windowWidth/2,windowHeight/2);
}