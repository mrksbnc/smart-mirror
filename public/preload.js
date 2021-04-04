const { contextBridge, ipcRenderer } = require('electron');

const validChannels = ['GET_MAILS'];
contextBridge.exposeInMainWorld('ipc', {
  send: (channel, data) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, func) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
