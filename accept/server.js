//基础NODE 服务
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((request,response)=>{
    console.log('request come');
    const html = fs.readFileSync('test.html');
        response.writeHead(200,{
            'Content-Type': 'text/html',
            'Content-Encoding':'gzip'
        })
        response.end(zlib.gzipSync(html))
        // response.end(html)

    
}).listen(8888)
console.log('serve lintening on 8888')