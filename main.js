var status_1 = "";   
var video = "";
var img = "";
var input_info = document.getElementById("input_1").value;

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,360);
    video.center();
    
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
    console.log(input_1.value);
}

function modelloaded(){
    console.log("MODEL SUCCESSFULLY IS LOADED");
}

function draw(){
   status_1 = true;
}
