function setup(){
   canvas= createCanvas(280,280);
   canvas.center();
background("white");
canvas.mouseReleased(mr);
v=window.speechSynthesis;
}
function preload(){
    ml=ml5.imageClassifier('DoodleNet');
}

function mr(){
    ml.classify(canvas,a);
}
function a(error,result){
if(error){
   console.log(error); 
}
else{
    console.log(result);
    document.getElementById("p1").innerHTML="label: "+result[0].label;
    document.getElementById("p2").innerHTML="confidence: "+floor(result[0].confidence*100)+"%";
    s=new SpeechSynthesisUtterance(result[0].label);
    v.speak(s);
}
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function cc(){
    background("white");
}