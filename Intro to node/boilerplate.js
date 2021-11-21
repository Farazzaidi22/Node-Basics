const fs = require('fs')

// console.log(process.argv[2])

const folderName = 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   // => [Error: EPERM: operation not permitted, mkdir 'C:\']
//   console.log("In the call")
//   if (err) throw err;
// });

// console.log("faraz is out")

try
{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`,'')
    fs.writeFileSync(`${folderName}/app.js`,'')
    fs.writeFileSync(`${folderName}/styles.css`,'')
}
catch (e)
{
    console.log(e)
}
