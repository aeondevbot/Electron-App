# Configurar

npm init -y

Configuração no package:

"productName": "Electron App"

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

npm install electron-builder --include=dev

# Depurar

npm run dev

# Criar instalador

npm run build-installer
