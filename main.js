peterPanSong = "";
harryPotterSong = "";
scoreLeftWrist = 0;
song1_status = "";
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}
function preload(){
    peterPanSong = loadSound("music.mp3");
    harryPotterSong = loadSound("music2.mp3")
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        harryPotterSong.stop();
        song1_status = peterPanSong.isPlaying();
        if(song1_status == false){
        peterPanSong.play();
        document.getElementById("song_name").innerHTML = "Playing - Peter Pan Song"
        }
    }
}
function modelloaded(){
    console.log("Posenet is initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("leftWristX: " + leftWristX + "leftWristY: "  + leftWristY);
        console.log("rightWristX: " + rightWristX + "rightWristY: "  + rightWristY);
        console.log("scoreLeftWrist: " + scoreLeftWrist);
    }
}