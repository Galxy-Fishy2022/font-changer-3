function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#89cff0');
    fill('#00008B');
    stroke('#00008B');
    textSize(diffrence);
    text("Anisha Nath", 20, 200);
}
function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    diffrence= floor(leftWristX - rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"diffrence = "+diffrence);
}
}
rightWristX=0;
leftWristX=0;
diffrence=0;