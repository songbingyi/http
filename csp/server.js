//基础NODE 服务
const http = require('http');
const fs = require('fs')
http.createServer((request, response) => {
    console.log('request come', request.url);
    const html = fs.readFileSync('test.html', 'utf8');
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Security-Policy': 'default-src http: https:'
        })
        response.end(html)
    }
    if(request.url === '/test.js'){
        response.writeHead(200,{
            'Content-type': 'application/javascript'
        })



      response.end('console.log("loaded script")')
        
    }

}).listen(8888)
console.log('serve lintening on 8888')