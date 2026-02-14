const openButton = document.getElementById('openButton');
const cartaVideo = document.getElementById('cartaVideo');
const dressButton = document.getElementById('dressButton');
const localButton = document.getElementById('localButton');
const giftButton = document.getElementById('giftButton');
const confirmButton = document.getElementById('confirmButton');
const mapsButton = document.getElementById('mapsButton');
const navBar = document.getElementById('navBar');
const mainContent = document.getElementById('mainContent');
const giftContent = document.getElementById('giftContent');
const dressContent = document.getElementById('dressContent');
const bgMusic = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');
const backgroundVideo = document.getElementById('backgroundVideo');
const pixButton = document.getElementById('pixButon');
const listLink = document.getElementById('listLink');


returnButton = document.getElementById('return');

let isMuted = false;

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1000); // delay de 1 segundo
});


if (backgroundVideo && backgroundVideo2) {
    document.addEventListener('click', () => {
        backgroundVideo.play();

        setTimeout(() => {
            // Inicia o fade-out do primeiro vídeo
            backgroundVideo.style.opacity = 0;

            // Após o fade-out, esconde e inicia o vídeo de fundo
            setTimeout(() => {
                backgroundVideo.style.display = 'none';
                backgroundVideo2.style.opacity = 1; // fade-in suave
                backgroundVideo2.play();

                // Mostra o conteúdo principal
                cartaVideo.style.display = 'none';
                mainContent.style.display = 'block';
                navBar.style.display = 'flex';
            }, 500); // tempo do fade-out
        }, 4000); // tempo até começar a transição
    }, { once: true });
}


// Toca a música de fundo ao carregar a página
if (bgMusic) {
    bgMusic.volume = 0.3; // Volume em 50%
    bgMusic.play().catch(() => {
        // Se o autoplay falhar, tenta tocar ao primeiro clique do usuário
        document.addEventListener('click', () => {
            bgMusic.play();
        }, { once: true });
    });
}

// Função de mute/unmute
if (muteButton) {
    muteButton.addEventListener('click', () => {
        if (isMuted) {
            bgMusic.muted = false;
            muteButton.src = 'res/botoes/play.png';
            isMuted = false;
        } else {
            bgMusic.muted = true;
            muteButton.src = 'res/botoes/pause.png';
            isMuted = true;
        }
    });
}

let letterIsOpen = false;
const isInPages = window.location.pathname.includes('/pages/');
const basePath = isInPages ? '' : 'pages/';
const isConfirmPage = window.location.pathname.includes('confirm_presence');
const isLocalPage = window.location.pathname.includes('local');

if (returnButton) {
    returnButton.addEventListener('click', () => {
        mainContent.style.display = 'block';
        pixButton.style.display = 'none';
        listLink.style.display = 'none';
        giftContent.style.display = 'none';
        dressContent.style.display = 'none';
        returnButton.style.display = 'none';
    });
}

if (dressButton) {
    dressButton.addEventListener('click', () => {
        mainContent.style.display = 'none'
        giftContent.style.display = 'none';
        pixButton.style.display = 'none';
        listLink.style.display = 'none';
        dressContent.style.display = 'block';
        returnButton.style.display = 'block';
    });
}

if (localButton) {
    localButton.addEventListener('click', () => {
        // Abre o Google Maps diretamente com o endereço
        // Adicione o endereço ou coordenadas do local da festa aqui
        // Você pode usar um endereço (exemplo: "Rua das Flores, 123, São Paulo") ou coordenadas (-23.5505, -46.6333)
        // const address = ''; // Altere para o endereço real
        //Para endereços variados https://www.google.com/maps/search/${encodeURIComponent(address)}
        const mapsUrl = `https://maps.app.goo.gl/tkSBaLwJM69x7jpB9`;
        window.open(mapsUrl, '_blank');
    });
}

if (giftButton) {
    giftButton.addEventListener('click', () => {
        mainContent.style.display = 'none'
        dressContent.style.display = 'none';
        pixButton.style.display = 'block';
        listLink.style.display = 'block';
        giftContent.style.display = 'block';
        returnButton.style.display = 'block';
    });
}

if (confirmButton) {
    confirmButton.addEventListener('click', () => {
        // Se estamos na página de confirmação, redireciona para WhatsApp
            // Adicione seu número de telefone no formato: +55XXXXXXXXXXX (incluindo o código do país)
            const phoneNumber = '+5541987930065'; // Exemplo: '+5511987654321'
            const mensagem = "Oi! Gostaria de confirmar minha presença! 🎉";
            const whatsappUrl = phoneNumber 
                ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`
                : `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
    });
}

if (mapsButton) {
    mapsButton.addEventListener('click', () => {
        // Adicione o endereço ou coordenadas do local da festa aqui
        // Você pode usar um endereço (exemplo: "Rua das Flores, 123, São Paulo") ou coordenadas (-23.5505, -46.6333)
        const address = 'Av. Prefeito jão batista stocco, 1609'; // Altere para o endereço real
        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    });
}

if (pixButton) {
    pixButton.addEventListener('click', () => {
        // Copia para a area de transferência o código do Pix
        const pixCode = '41992092118';
        navigator.clipboard.writeText(pixCode).then(() => {
            alert('Código Pix copiado para a área de transferência!');
        });
    })
}

if (listLink) {
    listLink.addEventListener('click', () => {
        const listUrl = 'https://happygiftlist.com/pt/lista-de-desejos/qj3tzqmn';
        window.open(listUrl, '_blank');
    });
}
