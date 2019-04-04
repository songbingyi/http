//基础NODE 服务
const http = require('http');
const fs = require('fs')
http.createServer((request,response)=>{
    console.log('request come');
    const html = fs.readFileSync('test.html','utf8');
    const img = fs.readFileSync('test.jpg')
    if(request.url === '/'){
        response.writeHead(200,{
            'Content-Type': 'text/html'
        })
        response.end(html)
    }else{
        response.writeHead(200,{
            'Content-Type':'image/jpg',
            'Cache-Control': 'max-age=1000'
        })
        response.end(img)
    }
    
}).listen(8888)
console.log('serve lintening on 8888')