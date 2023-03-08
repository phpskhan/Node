const http = require('http')

http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-Type':'applicatoin\json'});
    resp.write(JSON.stringify({name:'Sabih Khan',email:'phpskhan@gmail.com'}));
    resp.end();
}).listen(5000);
