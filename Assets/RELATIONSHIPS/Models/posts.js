// one to many : customer has posts in crore 
// Approach 3 -> child k andar parent (opposite of approach 2)

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId, // Correct property name
    ref: "User", // Ensure this matches the model name
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
//   const user1 = new User({
//     username: "Rahul",
//     email: "rahul@gmail.com",
//   });

//   await user1.save(); // Save the user first

//   const post1 = new Post({
//     content: "Hello World",
//     likes: 7,
//     user: user1._id, // Assign the ObjectId of the user
//   });

//   await post1.save(); // Save the post after assigning the user reference

let user = await User.findOne({username:'Rahul'})
const post2 = new Post({
    content: "bye bye!",
    likes: 23,
  });
  post2.user = user;
  await post2.save(); // Save the post after assigning the user reference

  console.log("Data added successfully!");
};

const getData =async()=>{
    let res = await Post.findOne({}).populate('user','username')
    console.log(res)
}

getData()
// addData();
