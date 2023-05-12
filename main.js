noseX = 0;
noseY = 0;


function prelooad() {
    clown_nose = loadImage('https://i.postimg.cc/QCk93PJh/clown.jpg');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();

    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + nose.X);
    console.log("nose y = " + nose.Y);
  }
}

function draw() {
    image(video, 0, 0, 600, 500); 
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}