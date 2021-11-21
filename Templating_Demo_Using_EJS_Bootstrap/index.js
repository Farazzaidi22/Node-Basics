import express from 'express';
import { createRequire } from 'module';
import * as path from 'path'

const app = express()
const __dirname = path.resolve();
const require = createRequire(import.meta.url);

const redditData = require('./data.json')

app.set('views', path.join(__dirname, '/views'))
// app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/r/:data', (req, res) => {
    var subreddit = { }
    subreddit = req.params
    const data = redditData[subreddit.data]
    // console.log(data)
    if(data)
    {
        res.render('dataDisplay.ejs', {... data})
    }
    else{
        res.render('notfound.ejs', {subreddit})

    }
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'rocket', 'monty', 'charlie']
    res.render('cats.ejs', {cats})
})

app.get('/rand', (req, res) => {
    // res.send("HI")
    const num = Math.floor(Math.random() * 10 ) + 1
    res.render('random.ejs', {rand: num})
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})