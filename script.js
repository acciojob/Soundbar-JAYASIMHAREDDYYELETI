// Sound names matching the audio element IDs
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');

// Create buttons dynamically
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
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

// Stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
