# Configurar

npm init -y

Configuração no package:
"scripts": {
    "dev": "electron .",
    "build-installer": "electron-builder"
 },

# Dependências

npm install --save-dev electron

npm install -g electron electron-packager

npm install electron-builder --dev

# Depurar

npm run dev

# Complilar (electron-packager)

cd ../

electron-packager --overwrite .\nome da pasta\ nome do app --platform=win32 --arch=x64 --prune=true --out=release-builds --electron-version=15.0.0 --icon=./nome da pasta/icon.ico

# Complilar (electron-builder)
