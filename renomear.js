import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos das pastas baseadas na sua estrutura
const sourceDir = path.join(__dirname, 'public');
const destDir = path.join(__dirname, 'src', 'assets');

// Dicionário de "De" -> "Para"
const fileMap = {
  // Logo Principal (Colorido)
  'GATTINI_LOGO_HORIZONTAL_COLOR_1.png': 'logo-gattini.png',
  
  // Logo Negativo (Branco)
  'GATTINI_LOGO_HORIZONTAL__WHITE_1.png': 'logo-gattini-white.png',
  
  // Símbolo (Favicon/Ícone)
  'G_SIMBOLO.png': 'simbolo.png'
};

// Garante que a pasta src/assets exista
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

console.log('Iniciando movimentação e renomeio dos arquivos...');

Object.entries(fileMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(sourceDir, oldName);
  const newPath = path.join(destDir, newName);

  if (fs.existsSync(oldPath)) {
    // Copia o arquivo para a nova pasta com o novo nome
    fs.copyFileSync(oldPath, newPath);
    console.log(`✅ Sucesso: ${oldName} -> ${newName}`);
    
    // Opcional: Remove o arquivo original da pasta public para não duplicar
    // fs.unlinkSync(oldPath); 
  } else {
    console.log(`⚠️ Arquivo não encontrado na pasta public: ${oldName}`);
  }
});

console.log('Processo concluído!');