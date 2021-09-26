const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        icon: `${__dirname}/icon.png`,
        resizable: false,
        autoHideMenuBar: true
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});