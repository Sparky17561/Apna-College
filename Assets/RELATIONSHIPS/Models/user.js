// Approach 1 -> One to few

// one to few reln : user has multiple addresses 
const mongoose = require('mongoose')
const {Schema} = mongoose;
main().then(()=> console.log('connection successful')).catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}


const userSchema = new Schema({
    username: String,
    addresses:[
        {
           location:String,
           city:String, 
        }
    ],
})


const User = mongoose.model('User',userSchema)


const addUsers = async() =>{
    let user1 = new User({
        username:'sherlockhomes',
        addresses: [{
            location : '221b baker street',
            city: 'london'
        }]
    })
    
    user1.addresses.push({location:'ps2 wallstreet', city:'london'})
    let result = await user1.save()
    console.log(result)
}

addUsers();