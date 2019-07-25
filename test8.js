const express = require('express');
const app = express();
const jade = require('jade');
const PORT = 3000;
app.set('view engine','jade');
app.set('views', './view');

app.get('/',function(req,res)
{
    res.render('index');
});

app.listen(PORT ,function(err)
{
    if(!err)
    {
        console.log('Server is running at PORT', PORT);
    }
    else
    {
        console.log(JSON.stringify(err));
    }
});
