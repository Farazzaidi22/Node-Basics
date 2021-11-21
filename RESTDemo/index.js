import express from 'express';
import { createRequire } from 'module';
import * as path from 'path'

const app = express()
const require = createRequire(import.meta.url);
const __dirname = path.resolve();

const {v4: uuid} = require('uuid')
uuid()

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', {comments})
})

app.post('/comments', (req, res) => {
    console.log(req.body)
    const {username, comment} = req.body
    comments.push({username, comment, id: uuid()})
    // res.send("IT WORKED!!!!")
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params
    console.log(req.params)
    const comment = comments.find( c => c.id === (id))
    console.log(comment)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params
    const comment = comments.find( c => c.id === (id))
    console.log(comment)
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id', (req, res) => {
    res.send("UPDSTINGGGGG!!!!!!!!!!!!")
    const { id } = req.params
    console.log("id ", id)
    const newCommentText = req.body.comment
    console.log("newCommentText ", newCommentText)
    const foundComment = comments.find( c => c.id === (id))
    console.log("foundComment ", foundComment)
    foundComment.comment = newCommentText
    res.redirect('/comments')

})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params
    comments = comments.filter( c => c.id !== id)
    res.redirect('/comments')
})

////////////////////////////////////////// 

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body)
    const { meat, qty } = req.body
    res.send(`POST /tacos response. Ok here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})