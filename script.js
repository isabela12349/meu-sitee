document.addEventListener('DOMContentLoaded', () => {
    
    // Função para o botão de download (Simulação)
    const btnDownload = document.getElementById('btnDownload');
    btnDownload.addEventListener('click', () => {
        alert("O seu currículo está sendo preparado para download!");
        // Exemplo: window.open('caminho/para/seu/pdf.pdf');
    });

    // Efeito simples de clique nos botões de redes sociais
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rede = e.target.innerText;
            alert(`Redirecionando para o seu ${rede}...`);
        });
    });

    // Log de carregamento profissional
    console.log("Portfólio Profissional carregado com sucesso.");
});
