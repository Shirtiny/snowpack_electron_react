const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const { format } = require('url');
const { join } = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.loadURL(`http://localhost:8080`);
    win.webContents.openDevTools();
  } else {
    win.loadURL(
      format({
        pathname: join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
    // or in root dir
    // !isDev && win.loadFile('./build/index.html');
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
