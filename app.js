const { app, BrowserWindow } = require('electron')
let { PythonShell } = require('python-shell');
const spawn = require("child_process").spawn;
function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  const pythonProcess = spawn('python',["deletetable.py"]);
//  const pythonProcess1 = spawn('python',["C:/electron_moving_marker/Backup/ServerLocal/exitapi.py"]);

//  let options1_5 = {
//        mode: 'text',
//        pythonPath: 'python',
//        pythonOptions: ['-u'], // get print results in real-time
//        args: ''
//    };
//
//    console.log('options1_5')
//    PythonShell.run('C:/electron_moving_marker/Backup/ServerLocal/testtxt.py',options1_5,  function  (err, api_results)  {
//    if  (err)  throw err;
//    console.log('API results');
//    console.log('API results', api_results);
//    });

        // return 'suvyuv';
    setTimeout(function(){
      console.log('two');
      if (process.platform !== 'darwin') {
        app.quit()
      }
    },0)

})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})