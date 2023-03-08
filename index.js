const http = require('http')

http.createServer((req,resp)=>{
    resp.write("Hi Sabih!");
    resp.end();
}).listen(4500);
