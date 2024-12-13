const express = require('express');
const app = express();


// console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port : ${port}`);
});

// app.use((req,res)=>{
//     console.log(req)
//     console.log('new incoming req');
//     res.send('this is a basic response');
// });

// ek baar me ek hi response

app.get('/',(req,res)=>{
    res.send('accha');
})



app.get("/:username/:id",(req,res)=>{
   let {username,id} = req.params;
   let htmlStr = `<h1>welcome to the page of @${username}</h1>`
   res.send(htmlStr)
   
});

// query parameter
app.get('/search',(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing searched</h1>")
    }
    res.send(`here are the results for the query : ${q}`);
})