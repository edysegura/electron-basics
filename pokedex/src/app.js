const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win = undefined

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false
  })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    })
  )

  win.on('closed', () => {
    win = undefined
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
