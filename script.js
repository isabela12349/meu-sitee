// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');

    // Valida se os elementos existem antes de aplicar o evento
    if (btn && music) {
        btn.addEventListener('click', function() {
            if (music.paused) {
                music.play();
                btn.textContent = '⏸️ Pause';
            } else {
                music.pause();
                btn.textContent = '▶️ Play ';
            }
        });
    }
});
