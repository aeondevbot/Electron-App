# Configurar

npm init -y

Configuração no package:

"scripts": {
    "dev": "electron ."
 },

# Depurar

npm run dev

# Dependências

npm install --save-dev electron

npm install -g electron electron-packager

# Complilar

cd ../

electron-packager .\arca-app\ Arca --platform=win32 --arch=x64 --electron-version=15.0.0
