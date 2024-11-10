const {contextBridge} = require("electron")
const fs = require("fs")
const p = ""
contextBridge.exposeInMainWorld('savedata', {
  save: data => fs.writeFileSync(p, data),
  load: () => fs.readFileSync(p).toString()
})
