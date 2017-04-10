var allMyBubbles = [];
var numOfBubbles = 800;
var sizeOfBubbles = 10;

 function setup(){
    createCanvas(600,400);
    for(var i = 0; i < 100; i++){
        allMyBubbles[i] = new Bubble(random(0,600), random(0,500));
    }
    
}

function draw(){
    background(104, 244, 66);
    for(var i = 0; i < allMyBubbles.length; i++){
        allMyBubbles[i].display();
        allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(177, 249, 241);
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBubbles, sizeOfBubbles);
    }
    this.move = function(){
        this.x = this.x + random(-1, 1); 
        this.y = this.y + random(-1, 1);
    }
}

        
    