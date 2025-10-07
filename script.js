// Sound names matching files in the "sounds" folder
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the button container
const buttons = document.getElementById('buttons');

// Create an object to hold audio references
const audioMap = {};

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);
  audioMap[sound] = audio;

  btn.addEventListener('click', () => {
    stopSounds();
    audio.currentTime = 0;
    audio.play();
  });

  buttons.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  Object.values(audioMap).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
