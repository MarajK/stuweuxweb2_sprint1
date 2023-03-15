
var abstandLinien;
var relativeLinienLaenge;
var linienLaenge;
var socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    spielfeldBerechnen();
    socket=io.connect();
    //socket=io.connect("http://10.147.112.253:3000/");
    socket.on('mouse', newDrawing);
    textFont('Roboto Condensed');
}

function draw() {
    background(0);
    textSize(50);
    fill(150);
    textAlign(CENTER, TOP);
    text('TIC TAC TOE', 0, 100, width);
    strokeWeight(20);
    stroke(255);
    spielfeldBauen();
    textSize(20);
    text(xAngeklickt, 10, 20);
    text(yAngeklickt, 10, 40);
    

   }

function newDrawing(data){
    noFill();
    stroke(217,65,30);
    ellipse(data.x, data.y, width/10,width/10);
}

function touchStarted(){
    noFill();
    stroke(169,185,217);
    var data={
        x:mouseX,
        y:mouseY
    }
    socket.emit('mouse', data);
    ellipse(mouseX, mouseY, width/10,width/10);
}


      
function spielfeldBerechnen() {
        relativeLinienLaenge = 0.7;
        if (windowHeight >= windowWidth) {
          linienLaenge = windowWidth*relativeLinienLaenge;  
        }
        else {
          linienLaenge = windowHeight*relativeLinienLaenge;  
        }
        abstandLinien = linienLaenge/3;
      }
      
      function spielfeldBauen() {
        push();
        translate(windowWidth/2-abstandLinien/2,windowHeight/2-3*abstandLinien/2);
        line(0,0,0,linienLaenge);
        pop();
        push();
        translate(windowWidth/2+abstandLinien/2,windowHeight/2-3*abstandLinien/2);
        line(0,0,0,linienLaenge);
        pop();
        push();
        translate(windowWidth/2-3*abstandLinien/2,windowHeight/2-abstandLinien/2);
        line(0,0,linienLaenge,0);
        pop();
        push();
        translate(windowWidth/2-3*abstandLinien/2,windowHeight/2+abstandLinien/2);
        line(0,0,linienLaenge,0);
        pop();  
      }

