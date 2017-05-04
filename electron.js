const electron = require('electron')
const {app , BrowserWindow} = electron;

app.on('ready', () =>   {
  let win = new BrowserWindow({
    width:500,
    height:500
  })
  win.loadURL(`file://${__dirname}/index.html`)
})