const http = require('http');

var ssss = 
{
    '/foo' : function index(request, response)
    {
        response.writeHead(200)
        response.end('view fool');
        
    }
}

http.createServer(function(request, response)
{
    try
    {
        if(request.url in ssss)
        {
            response.writeHead(200);
            return ssss[request.url](request,response);
        }
    }
    catch(error)
    {
        throw new error('Broken');
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
    console.log('fail to URL wrong ');

}).listen(5000);