const fetch = require('electron-fetch').default;
const ipc = require('electron').ipcMain;
const { app, BrowserWindow } = require('electron');
const { BACKEND_URL } = require('./settings');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  ipc.on('fetchData', (event) => {
    fetch(BACKEND_URL)
      .then((res) => res.json())
      .then((json) => event.sender.send('responseRecieved', json))
      .catch((error) => event.sender.send('errorRecieved', error));
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
