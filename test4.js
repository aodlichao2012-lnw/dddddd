const http = require('http');

var ssss = 
{
    '/foo' : function index(request, response)
    {
        response.writeHead(200);
        response.end('view foo');
    }
}

http.createServer(function(request, response)
{
    if(request.url in ssss)
    {
        response.writeHead(200);
        return ssss[request.url](request,response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(5000);