let wave, button, playing = false

let env, slider

function setup() {
  createCanvas(100,100);
  
  env = new p5.Envelope()
  env.setADSR(0.5, 0.25, 0.5, 0.1)
  env.setRange(0.8, 0)
  
  wave = new p5.Oscillator('sine');
  // slider = createSlider(100, 1200, 440)
  wave.start()
  wave.freq(440)
  wave.amp(env)
  
  button = createButton('play')
  button.mousePressed(toggleButton)
}

function draw() {
  // wave.freq(slider.value())
  if(playing){
    background(255, 0 , 255)
  }
  else{
    background(51)
  }
}

function toggleButton(){
  env.play()
  playing = !playing
  // if(!playing){
  //   wave.amp(0.5, 1)
  //   playing = true
  // }else{
  //   wave.stop()
  //   wave.amp(0, 1) //sound, time to reach sound
  //   playing = false
  // }
}
