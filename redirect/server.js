//基础NODE 服务
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((request,response)=>{
    console.log('request come',request.url);
    if(request.url === '/'){
        response.writeHead(302,{
            'Location':'/new',
        })
    }
    
}).listen(8888)
console.log('serve lintening on 8888')