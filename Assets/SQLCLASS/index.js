const {faker } = require('@faker-js/faker');
const mysql = require('mysql2')
const express = require('express')
const app = express();
const path = require('path')
const port = 8080;
const methodOverride = require('method-override')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'abc123'
});

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set("views", path.join(__dirname,'/views'))

let getUser = () =>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};





app.get('/',(req,res)=>{
    let q = `SELECT count(*) from user`
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let x = result[0]['count(*)']
            res.render("home",{x})
        })
    }catch(err){
        console.log(err)
        res.send('some err in db')
    }
    
})

app.get('/user',(req,res)=>{
    let q = 'SELECT * FROM user'
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render('users',{users})
        })
    }catch(err){
        console.log(err)
        res.send('some err in db')
    }
})

app.get('/user/:id/edit',(req,res)=>{
    let {id} = req.params
    let q = `select username,email,id from user where id = "${id}"`
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result)
            console.log(id)
            res.render('edit',{user: result[0]})
        })
    }catch(err){
        console.log(err)
        res.send('some err in db')
    }
})

// update 
app.patch('/user/:id',(req,res)=>{
    let {id} = req.params
    let{password:formPass, username:newUserName} = req.body
    let q = `select * from user where id = "${id}"`
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formPass !== user.password){
                res.send('wrong')
                console.log(user.password)
            }
            else{
                let q2 = `update user set username='${newUserName}' where id = '${id}'`
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.send(result);
                })
            }
            
        })
    }catch(err){
        console.log(err)
        res.send('some err in db')
    }
})


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});



// connection.end();