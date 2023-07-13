const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const app=express();

app.use(bodyParser.urlencoded({extended: false}));

let usr="";

app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/save" method="POST"><input id="username" type="text" name="userName"><button type="submit">submit</button></form>')
})

app.post('/save',(req,res,next)=>{
    const user=req.body.userName;
    usr=user;
    console.log(user);
     res.redirect('/');
})

app.get('/',(req,res,next)=>{
    const readMsg = fs.readFileSync('message.txt', 'utf-8');
    res.send(`${readMsg}<form action="/data" method="POST"><input type="text" placeholder="enter msg" name="user"><button type="submit">submit</button></form>`)
})

app.post('/data',(req,res,next)=>{
    let data=usr+": "+req.body.user+" ";
    fs.appendFile('message.txt', data, (err)=>{
        if(err)throw err;
        console.log("msg saved");
        res.redirect('/');
    })
})

app.listen(3000);