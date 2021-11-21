import express from 'express';
const app = express()

// app.use((req, res) => {
//     console.log("we got a new request")
//    // res.send("Hello, we got your request ")
// })


app.get('/', (req, res) => {
    res.send("Welcome to Home")
})

app.get('/search', (req, res) => {
    const {q} = req.query
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('/r/:data', (req, res) => {
    const {data} = req.params
    res.send(`This is the ${data} you are looking for`)
})

app.get('/cats', (req, res) => {
    console.log("Cat request!!!")
    res.send("Meow")
})

app.post('/cats', (req, res) => {
    console.log("Cat request with post!!!")
    res.send("Meow Meow")
})

app.get('*', (req, res) => {
    res.send("Can't match")
})

app.listen(3000, () => {
    console.log("listening of port 3000")
})