let song;
let play
let sliderVolume;
let sliderRate;
let sliderPan;

function setup() {
  createCanvas(200,200)

  song = loadSound('The Shadow Of The Bluff.mp3', loaded)
  amp = new p5.Amplitude()
  
  background(51)

 

  song.addCue(2, changeBackground, color(0,0,255))
  song.addCue(4, changeBackground, color(0,255,255))
  song.addCue(6, changeBackground, color(0,255,0))

  // pause = createButton('stop')
	// stop.mousePressed(function(){
	// 	song.stop()
	// })

  // sliderVolume = createSlider(0,1,0.5,0.01)
  // sliderRate = createSlider(0,1,3,0.01)
  // sliderPan = createSlider(-1,1,0 ,0.01)
}

function changeBackground(col){
  background(col)
}



function loaded(){
  // song.play()
  function togglePlay(){
    if(!song.isPlaying()){
      song.play()
      button.html('pause')
    }else{
      song.pause()
      button.html('play')
    }
  }

  button = createButton('play')
	button.mousePressed(togglePlay)

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  console.log('Loaded')
} 

function jumpSong(){
  let len = song.duration()
  let t = random(len)
  console.log(t)
  song.jump(t)
}

function draw() {

  background(54)

  let vol = amp.getLevel()
  let diam = map(vol, 0,0.3, 10, 200)

  fill(song.currentTime() * 100 % 5, 100, 255)
  ellipse(width/2, height/2, diam, diam)
  // background(0);
  // console.log(song.currentTime())
  // if(song.currentTime() > 5){
  //   background(255,0,255)
  // }
  // background(song.currentTime() * 10, 0, 255)
  // song.setVolume(sliderVolume.value())
  // song.rate(sliderRate.value()) 
  // song.pan(sliderPan.value()) // from left ear to right ear
}