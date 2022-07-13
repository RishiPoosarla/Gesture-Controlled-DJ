peterPanSong = "";
harryPotterSong = "";
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function preload(){
    peterPanSong = loadSound("music.mp3");
    harryPotterSong = loadSound("music2.mp3")
}
function draw(){
    image(video, 0, 0, 600, 500);
}