'use strict';

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // Тут нужно обработать запрос
    res.end(JSON.stringify({ from: 'me', to: 'my friend', text: 'hello' }));
});

module.exports = server;
