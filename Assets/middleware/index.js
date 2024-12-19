const express = require('express')
const app = express();
const port = 8080 
const ExpressError = require('./ExpressError')
// app.use((req,res,next)=>{
//     console.log('hi im middleware')
//     return next()
// })
// app.use((req,res,next)=>{
//     console.log('hi im  2nd middleware')
//     return next()
// })
// app.use((req,res,next)=>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// })
const checkToken = (req,res,next)=>{
    let {token} = req.query
    if(token === 'get access'){
        next();
    }
    throw new ExpressError(401,'Fuck u')
}
app.get('/api',checkToken,(req,res)=>{
    res.send('data')
})
app.get('/',(req,res)=>{
    res.send('hi im root')
})

app.get('/render',(req,res)=>{
    res.send('hi this is the rendered page')
})
app.get('/admin',(req,res)=>{
    throw new ExpressError(403,'access is forbidden')
})
app.use((err,req,res,next)=>{
    let {status=500,message='some error occured'}=err;
    res.status(status).send(message)
})

app.get('/admin',(req,res)=>{
    throw new ExpressError(403,'access is forbidden')
})
app.listen(port,()=>{
    console.log(`connected to port ${port}`)
})

