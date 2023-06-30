function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    background("#c9ccd1");

    textSize(difference);
    fill("#95f584");
    text("Trisha", 30, 100);
}

function modelLoaded()
{
    console.log("Posenet has initialized");
}

leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function gotPoses()
{
   leftWrist_x = results[0].pose.leftWrist.x;
   rightWrist_x = results[0].pose.rightWrist.x;
   difference = floor(leftWrist_x - rightWrist_x);

}