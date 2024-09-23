// Função para mostrar a mensagem surpresa
document.getElementById("surpriseButton").addEventListener("click", function() {
    var message = document.getElementById("surpriseMessage");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️'; // Muda para ícone de pausa
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️'; // Muda para ícone de play
    }
});

// Atualiza a barra de progresso
audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progressPercent + '%';
});

