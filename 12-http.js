const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to homepage')
    }
    else if(req.url === '/about'){
        res.end('Here is about us')
    }

    else{res.end(
        `<html>
        <h1>Oops!!</h1>
        <p1>We couldn.t find the page you are looking for</p1>
        </html>`
    )}
   
})

server.listen(5000)