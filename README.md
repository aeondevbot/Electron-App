# Configurar

npm init -y

Configuração no package:
"scripts": {
    "dev": "electron ."
 },

# Dependências

npm install --save-dev electron

npm install -g electron electron-packager

# Depurar

npm run dev

# Complilar

cd ../

electron-packager --overwrite .\nome da pasta\ nome do app --platform=win32 --arch=x64 --prune=true --out=release-builds --electron-version=15.0.0 --icon=./nome da pasta/icon.ico
