console.log("Hello from the greeter file")
const args = process.argv.slice(2) 
for(let arg of args){
    console.log( `Hi, ${arg}` )
}