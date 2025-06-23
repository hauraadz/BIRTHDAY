// Fungsi buka buku
document.getElementById('openBook').addEventListener('click', () => {
  document.querySelector('.cover').style.display = 'none';
  document.querySelector('.storybook').classList.remove('hidden');
  const bgm = document.getElementById('bgm');
  if (bgm.paused) {
    bgm.play();
  }
});

// Mute/unmute musik latar
const bgm = document.getElementById('bgm');
const muteToggle = document.querySelector('.mute-toggle');

muteToggle.addEventListener('click', () => {
  if (bgm.muted) {
    bgm.muted = false;
    muteToggle.textContent = '🔊';
  } else {
    bgm.muted = true;
    muteToggle.textContent = '🔇';
  }
});
