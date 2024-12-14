const express = require('express')
const app = express();
const port = 8080
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public/styles')));
app.use(express.static(path.join(__dirname,'public/js')));

let posts = [
    {
        id: uuidv4(),
        username:'apnaclg',
        content:'i love coding'
    },
    {
        id: uuidv4(),
        username:'sai',
        content:'whatsupp '
    },
    {
        id: uuidv4(),
        username:'abhinav',
        content:'ki haal'
    },
]
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/posts',(req,res)=>{
    let {username, content} =req.body
    let id = uuidv4()
    posts.push({id , username,content})
    res.redirect('/posts')
    
})

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params
    let post = posts.find((p)=> id === p.id);
    console.log(post)
    console.log(id)
    res.render('show.ejs',{post})
    
})

app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p)=> id === p.id);
    post.content = newContent
    console.log(newContent)
    console.log(id)
    res.redirect('/posts')
})

app.get('/posts/:id/edit',(req,res)=>{
    let {id} = req.params
    let post = posts.find((p) => id.trim() === p.id.trim());
    console.log(post)
    res.render('edit.ejs',{post})
})

app.delete('/posts/:id',(req,res)=>{
    let {id} = req.params
    posts = posts.filter((p) => id.trim() !== p.id.trim());
    res.redirect('/posts')
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})

