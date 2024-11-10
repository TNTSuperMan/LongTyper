import checker from "license-checker"
import * as fs from "fs"

checker.init({
  start: "./"
}, (err, pkgs)=>{
  if(err){
    throw err;
  }else{
    let file = []
    let nofile = []
    let nolicense = []
    Object.entries(pkgs).forEach(t=>{
      let e = t[1]
      if(e.licenseFile){
        file.push(t)
      }else if(e.licenses && e.repository){
        nofile.push(t)
      }else{
        nolicense.push(t)
      }
    })
    let lastEntry = []
    lastEntry.push(...file.map(e=>[e[0],fs.readFileSync(e[1].licenseFile).toString()]))

    lastEntry.push(...nofile.map(e=>
      [e[0],`${e[1].repository}\nこのプログラムは${e[1].licenses}ライセンス下で提供されています`]
    ))
    fs.writeFileSync("./src/license.ts", "export default" + JSON.stringify(Object.fromEntries(lastEntry)))
    if(nolicense.length != 0){
      throw "Found unknown license"
    }
  }
})
