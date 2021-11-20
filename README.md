# Configurar

npm init -y

Configuração no package:
"productName": "nome do produto"

"scripts": {
    "dev": "electron .",
    "build-installer": "electron-builder"
 },

"build": {
    "appId": "nome do projeto",
    "win": {
        "target": ["nsis"],
        "icon": "icon.ico",
        "requestedExecutionLevel": "requireAdministrator"
    }
    "nsis": {
        "installerIcon": "icon.ico",
        "unistallerIcon": "icon.ico",
        "unistallDisplayName": "Nome do produto",
        "license": "license.txt",
        "oneClick": false,
        "allowToChangeInstallAtionDirectory": true
    }
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

npm run build-installer
