const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const tempoAtual = document.getElementById("tempoAtual");
const duracaoTotal = document.getElementById("duracaoTotal");
const volumeSlider = document.getElementById("volume");

// Tocar ou pausar
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸ Pausar";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶ Tocar";
  }
}

// Voltar 10 segundos
function retroceder() {
  audio.currentTime -= 10;
}

// Avançar 10 segundos
function avancar() {
  audio.currentTime += 10;
}

// Atualiza tempo atual e duração
audio.addEventListener("timeupdate", () => {
  tempoAtual.textContent = formatarTempo(audio.currentTime);
  duracaoTotal.textContent = formatarTempo(audio.duration);
});

// Controla volume
function mudarVolume() {
  audio.volume = volumeSlider.value;
}

// Função para formatar segundos em mm:ss
function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${minutos}:${seg < 10 ? "0" + seg : seg}`;
}

