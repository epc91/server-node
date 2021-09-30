// Http & filesystem library
let http = require('http');
let fs = require('fs');

// Ip
const myWifiIp = ''
// Request 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

// Server
let server = http.createServer(handleRequest)
server.listen(6969, myWifiIp);

console.log('server running on port 6969')
