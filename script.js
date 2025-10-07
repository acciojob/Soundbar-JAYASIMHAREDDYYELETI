//your JS code here. If required.
// Sound names (same as filenames in sounds folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the buttons section
const buttons = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);

  btn.addEventListener('click', () => {
    stopSounds();  // stop any currently playing sound
    audio.currentTime = 0;
    audio.play();
  });

  buttons.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopSounds);

buttons.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  const allAudios = document.querySelectorAll('audio');
  allAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
