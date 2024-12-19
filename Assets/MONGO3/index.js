const express = require('express')
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const Chat = require('./models/chat.js')
const methodOverride = require('method-override')
const ExpressError = require('./ExpressError.js')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
main().then(()=>{
    console.log('connection successful')
})
.catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// let chat1 = new Chat({
//     from : 'neha',
//     to : 'priya',
//     msg: 'send me ur exam sheets',
//     created_at: new Date(),
// })

// chat1.save().then((res)=>{
//     console.log(res)
// })
// index route 

app.get('/chats',async (req,res,next)=>{
    try{
        let chats = await Chat.find();
        console.log(chats)
        res.render('index.ejs',{chats})
    }catch(err){
        next(err)
    }
})
app.get('/',(req,res)=>{
    res.send('root is working')
})
//delete route 
app.delete('/chats/:id',async (req,res,next)=>{
    try{
        let {id} = req.params
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat)
    res.redirect('/chats')
    }catch(err){
        next(err)
    }
})
//edit route 
app.get('/chats/:id/edit',async (req,res,next)=>{
    try{
        let {id} = req.params
        let chat = await Chat.findById(id)
        res.render('edit.ejs',{chat})
    }catch(err){
        next(err)
    }
})

// update route 
app.put('/chats/:id',async (req,res,next)=>{
    try{
        let {id} = req.params
    let {msg : newMsg} = req.body
    console.log(newMsg)
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
    console.log(updatedChat)
    res.redirect('/chats')
    }catch(err){
        next(err)
    }
    
})
// add route
app.post('/chats',async (req,res,next)=>{
    try{
        let { from, to, msg} = req.body;
            let newChat = new Chat({
                from : from,
                to: to,
                msg: msg,
                created_at: new Date(),

            })
            await newChat.save()
            res.redirect('/chats')
            
        }catch(err){
            next(err)
        }
    })
    

// new route
app.get('/chats/new',(req,res)=>{
    
    res.render('new.ejs')
})

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    }
}

// Route for fetching a chat by ID
app.get('/chats/:id', asyncWrap( async (req, res, next) => {
    const { id } = req.params;

    // // Check if the provided ID is a valid MongoDB ObjectId
    // if (!mongoose.isValidObjectId(id)) {
    //     return next(new ExpressError(400, 'Invalid chat ID'));
    // }

    // try {
        // Attempt to find the chat in the database
        const chat = await Chat.findById(id);
        if (!chat) {
            return next(new ExpressError(404, 'Chat not found'));
        }
        res.render('edit.ejs', { chat });
    // } catch (err) {
    //     next(err); // Pass any unexpected errors to the error-handling middleware
    // }
}))
app.get('/',(req,res)=>{
    res.send('working root')
})

const handleValidationError= (err) => {
    console.log('this is a validation error please follow rules')
    console.dir(err.message)
    return err
}
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name === 'ValidationError')
        handleValidationError(err)
    next(err)
})
// err handling midware
app.use((err,req,res,next)=>{
    let {status=500,message='some error'} = err 
    res.status(status).send(message)
})
app.listen(8080,()=>{
    console.log('server started ')
})

