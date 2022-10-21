Status="";
input_text="";

function setup () {
    canvas=createCanvas(400,380);
    canvas.center();
    canvas.position(680,250);
    video=createCapture(VIDEO);
    video.size(400,380);
    video.hide();
}
function start(){
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    input_text=document.getElementById("input_id").value;

}
function modelLoaded(){
    console.log("model_loaded");
    Status=true;
}
function draw(){
    image(video,0,0,400,380);
}