//基础NODE 服务
const http = require('http');
const fs = require('fs')
http.createServer((request,response)=>{
    console.log('request come');
    if(request.url === '/'){
        const html = fs.readFileSync('test.html','utf8');
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.end(html)
    }

    if(request.url === '/script.js'){
        response.writeHead(200,{
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=20'
            
        })
        response.end('console.log("script loaded")')
    }
    
}).listen(8888)
console.log('serve lintening on 8888')