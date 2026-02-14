#!/usr/bin/env node

/**
 * Build script que injeta as variáveis de .env em config.js
 * Execute: node build-config.js
 * 
 * Isso garante que .env NÃO fica exposto no código-fonte
 */

const fs = require('fs');
const path = require('path');

// Lê o arquivo .env
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
    console.error('❌ Arquivo .env não encontrado!');
    console.error(`📝 Copie .env.example para .env e preencha os dados:`);
    console.error(`   cp .env.example .env`);
    process.exit(1);
}

// Parse do .env
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};

envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split('=');
        const value = valueParts.join('=').trim();
        env[key.trim()] = value;
    }
});

// Valida variáveis obrigatórias
const required = ['WHATSAPP_PHONE', 'LOCATION_ADDRESS', 'GOOGLE_MAPS_SHORTURL', 'PIX_CODE', 'GIFT_LIST_URL'];
const missing = required.filter(key => !env[key]);

if (missing.length > 0) {
    console.error(`❌ Variáveis obrigatórias faltando em .env: ${missing.join(', ')}`);
    process.exit(1);
}

// Gera config.js
const configContent = `// ⚠️ AVISO: Arquivo gerado automaticamente pelo build-config.js
// NÃO edite este arquivo manualmente!
// Edite .env e execute: node build-config.js

const config = {
    // Número WhatsApp para confirmação de presença
    whatsappPhone: '${env.WHATSAPP_PHONE}',
    
    // Endereço do local do evento
    locationAddress: '${env.LOCATION_ADDRESS}',
    
    // URL encurtada do Google Maps
    googleMapsUrl: '${env.GOOGLE_MAPS_SHORTURL}',
    
    // Código PIX para cópia
    pixCode: '${env.PIX_CODE}',
    
    // URL da lista de presentes
    giftListUrl: '${env.GIFT_LIST_URL}'
};

// Exporta para módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}
`;

fs.writeFileSync(
    path.join(__dirname, 'config.js'),
    configContent,
    'utf8'
);

console.log('✅ config.js gerado com sucesso!');
console.log('📋 Variáveis carregadas:');
console.log(`   - WHATSAPP_PHONE: ${env.WHATSAPP_PHONE}`);
console.log(`   - LOCATION_ADDRESS: ${env.LOCATION_ADDRESS}`);
console.log(`   - GOOGLE_MAPS_SHORTURL: ${env.GOOGLE_MAPS_SHORTURL.substring(0, 30)}...`);
console.log(`   - PIX_CODE: ${env.PIX_CODE}`);
console.log(`   - GIFT_LIST_URL: ${env.GIFT_LIST_URL.substring(0, 30)}...`);
