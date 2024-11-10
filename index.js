import {app, BrowserWindow} from "electron"
import * as path from "path"
app.on("ready",()=>{
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(import.meta.dirname, "preload.js")
    }
  })
  win.setMenu(null)
  win.loadURL("file:///"+path.resolve(import.meta.dirname, "dist", "index.html"))
  win.webContents.openDevTools();
})
