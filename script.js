const openButton = document.getElementById('openButton');
const homeButton = document.getElementById('homeButton');
const localButton = document.getElementById('localButton');
const giftButton = document.getElementById('giftButton');
const confirmButton = document.getElementById('confirmButton');
const mapsButton = document.getElementById('mapsButton');

// Detecta se estamos já dentro da pasta pages/
const isInPages = window.location.pathname.includes('/pages/');
const basePath = isInPages ? '' : 'pages/';
const isConfirmPage = window.location.pathname.includes('confirm_presence');
const isLocalPage = window.location.pathname.includes('local');

if (openButton) {
    openButton.addEventListener('click', () => {
        window.location.href = basePath + 'home.html';
    });
}

if (homeButton) {
    homeButton.addEventListener('click', () => {
        window.location.href = basePath + 'home.html';
    });
}

if (localButton) {
    localButton.addEventListener('click', () => {
        // Abre o Google Maps diretamente com o endereço
        // Adicione o endereço ou coordenadas do local da festa aqui
        // Você pode usar um endereço (exemplo: "Rua das Flores, 123, São Paulo") ou coordenadas (-23.5505, -46.6333)
        const address = 'Av. prefeito joão batista stocco 1609'; // Altere para o endereço real
        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    });
}

if (giftButton) {
    giftButton.addEventListener('click', () => {
        window.location.href = basePath + 'gift_list.html';
    });
}

if (confirmButton) {
    confirmButton.addEventListener('click', () => {
        // Se estamos na página de confirmação, redireciona para WhatsApp
            // Adicione seu número de telefone no formato: +55XXXXXXXXXXX (incluindo o código do país)
            const phoneNumber = '+5543996637278'; // Exemplo: '+5511987654321'
            const mensagem = "Oi! Gostaria de confirmar minha presença no convite! 🎉";
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