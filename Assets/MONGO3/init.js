const mongoose = require('mongoose')
const Chat = require('./models/chat.js')


main().then(()=>{
    console.log('connection successful')
})
.catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}



let allChats = [
    {
    from : 'neha',
    to : 'priya',
    msg: 'send me ur exam sheets',
    created_at: new Date(),
    },
    {
        from : 'raju',
        to : 'priya',
        msg: 'send me assignments',
        created_at: new Date(),
    },
]

Chat.insertMany(allChats)