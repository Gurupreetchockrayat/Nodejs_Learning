const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('hello from nodejs..');
})

server.listen(3000, ()=>{
    console.log('port 3000')
});
