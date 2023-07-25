


const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run server');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World </h1>');
    res.write('<p>Helo </p>');
    res.end()

})

server.listen(3000, 'localhost', () => {
    console.log('running server port 3000')
})

