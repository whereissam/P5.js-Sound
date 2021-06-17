let wave, button, playing = false

let env, slider

function setup() {
  createCanvas(100,100);
  wave = new p5.Oscillator('sine');
  slider = createSlider(100, 1200, 440)
  wave.start()
  wave.freq(440)
  wave.amp(0)
  
  button = createButton('play')
  button.mousePressed(toggleButton)
}

function draw() {
  wave.freq(slider.value())
  if(playing){
    background(255, 0 , 255)
  }
  else{
    background(51)
  }
}

function toggleButton(){
  if(!playing){
    wave.amp(0.5, 1)
    playing = true
  }else{
    wave.stop()
    wave.amp(0, 1) //sound, time to reach sound
    playing = false
  }
}
