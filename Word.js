class Word {
    constructor(text,x,y,f,s){
        this.x = x;
        this.y = y;
        this.text = text;
        this.f = round(f);
        this.speed = s;
    }
    
    display(){
        if (this.f===1){
            textFont(font1);
        } else if (this.f === 2){
            textFont(font2);
        } else{
            textFont(font3);
        }
        
        fill(colorR, colorG, colorB);
        textSize(valSlider);
        rotateX(millis()/this.speed);
        rotateZ(millis()/this.speed/20);
        text(this.text,this.x,this.y);
    }
}