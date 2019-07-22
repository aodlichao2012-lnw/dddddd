const http = require('http');
http.createServer((Request,response) => {
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write('Hello World\n');
    response.end();
}).listen(5000);
