const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        const readMsg = fs.readFileSync('message.text', 'utf-8');
        res.write('<h1>' + readMsg + '</h1>');
        res.write('<body><form action="/message" method="POST"><input typr="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === "/message" && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString();
        const message=parseBody.split('=')[0];
        fs.writeFileSync("message.text" , message);
        });
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
}

// module.exports={
//     handler:requestHandler
// }

// module.exports.handler=requestHandler;

// module.exports=requestHandler;

exports.handler=requestHandler;