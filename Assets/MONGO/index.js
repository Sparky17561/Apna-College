const mongoose = require('mongoose');

// Connect to MongoDB
main()
  .then(() => console.log('Connection successful'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Define Model
const User = mongoose.model("User", userSchema);

// Create Instance
const user1 = new User({ name: 'adam', email: 'adam@yahoo.in', age: 48 });

// Save to Database

// User.findByIdAndUpdate({_id:'676179a987c10ebb50e5277c'},{age:60},{new:true}).then((data)=>console.log(data))

// User.insertMany(
//     [
//         {name:'tony',email:'tony@gmail.com',age:50},
//         {name:'bruce',email:'bruce@gmail.com',age:45},
//         {name:'peter',email:'peter@gmail.com',age:56},
//     ]
// ).then((data)=>{
//     console.log(data)
// });

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    autor: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
});


const Book = mongoose.model('Book',bookSchema);