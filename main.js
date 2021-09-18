nosex=0;
nosey=0;
rightwrist=0;
leftwrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function draw(){
    background('#969A97');
    fill('#a1f542');
    stroke('#000000');
    square(nosex,nosey,difference);
}
function modelLoaded(){
    console.log('Posenet is initialized!')
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
    else{
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
    }
}