// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { allowedNodeEnvironmentFlags } = require('process');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // enable node processes in electron app
      nodeIntegrationInWorker: true, // enable node processes in web workers
      contextIsolation: false // separate context btw internal logic and website in webContents (make 'require' work)
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  const {ipcMain} = require('electron')

  // receive message from index.html 
  ipcMain.on('asynchronous-message', (event, arg) => {
    
    // send message to index.html
    event.sender.send('asynchronous-reply', arg);

    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
