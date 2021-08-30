video = "";
status = "";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(300, 280);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 300, 280);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}