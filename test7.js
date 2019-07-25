const http = require('http');

var routes = 
{
    '/foo' : function index(req,res)
    {
        res.writeHead(200)
        res.end('Hello world');
    }

}

http.createServer(function(req,res)
{
    try
    {
        if(req.url in routes)
        {
            res.writeHead(200);
            return routes[req.url](req,res);

        }
        console.log('Not Found');
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }
    catch(error)
    {
        throw new error('Broken');
    }
}).listen(5000);