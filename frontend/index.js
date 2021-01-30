const ipc = require('electron').ipcRenderer;

ipc.once('responseRecieved', (event, responseJSON) => {
  const elem = document.getElementById('app');
  elem.innerHTML = JSON.stringify(responseJSON);
});
ipc.once('errorRecieved', (event, error) => {
  const elem = document.getElementById('app');
  elem.innerHTML = error.message;
});
ipc.send('fetchData');
