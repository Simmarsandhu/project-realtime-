noseX=0;
noseY=0
wristleftY=0;
wristrightY=0
difference=0;

function preload(){

}
function setup(){
 video = createCapture(VIDEO);
 video.size(550,500);
 video.position(200,150)
 canvas = createCanvas(550,500);
 canvas.position(900,150);

 pose_net= ml5.poseNet(video,modelLoaded);
 pose_net.on("pose",gotposes);
 
}
function modelLoaded(){
    console.log("model loaded");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        wristleftY=results[0].pose.leftWrist.y;
        wristrightY=results[0].pose.rightWrist.y;
        difference= floor(wristleftY-wristrightY);

    }

}
function draw(){
 background("#A77979");
 textSize(difference);
 fill("black");
 text("hi ,how are you?",noseX,noseY);
 document.getElementById("span2").innerHTML="size of the text is "+ difference + "px";

}