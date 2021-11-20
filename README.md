# Configurar

npm init -y

Configuração no package:

"productName": "nome do produto"

"scripts": {
    "dev": "electron .",
    "build-installer": "electron-builder"
  },
  "build": {
    "appId": "electron-app",
    "win": {
      "target": ["nsis"],
      "icon": "icon.ico"
    },
    "nsis": {
      "installerIcon": "icon.ico",
      "uninstallerIcon": "icon.ico",
      "uninstallDisplayName": "Electron App",
      "license": "license.txt",
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true
    }
  },

# Dependências

npm install --save-dev electron

npm install electron-builder --dev

# Depurar

npm run dev

# Complilar

npm run build-installer
