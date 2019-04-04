//基础NODE 服务
const http = require('http');
const fs = require('fs')
http.createServer((request,response)=>{
    console.log('request come');

        const html = fs.readFileSync('test.html','utf8');
        response.writeHead(200,{
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=123; max-age=2','b=345']
        })
        response.end(html)
    
}).listen(8888)
console.log('serve lintening on 8888')