const path = require('path')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
    
      app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
      })
  })

  const axios = require("axios");
const options = {
    method: 'GET',
    url:"http://dog-api.kinduff.com/api/facts?number=1"
};

axios.request(options).then(function (response) {
	const facts = response.data.facts;
  const [fact] = facts;
  console.log(fact);
}).catch(function (error) {
	console.error(error);
});


  