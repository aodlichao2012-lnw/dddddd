const express = require('express');
const greetMiddleware = require('./test5.js');

class GreetingService 
{
    constructor(greeting = 'Hello')
    {
        this.greeting = greeting;
    }
    createGreeting(name)
    {
        return `${this.greeting}, ${name}!`;;
    }
}
express()
    .use('/api/v1/Service1',greetMiddleware(
        {
            service: new GreetingService('Hello'),

        }
    ))
    .use('/api/v1/Service2',greetMiddleware(
        {
            service: new GreetingService('Hi'),
        }
    ))
    .listen(5000);