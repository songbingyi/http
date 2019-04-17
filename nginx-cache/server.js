//基础NODE 服务
const http = require('http');
const fs = require('fs')
const wait = (sec) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove()
        }, sec * 1000)
    })
}

http.createServer((request, response) => {
    console.log('request come', request.headers.host);
    let html = fs.readFileSync('test.html', 'utf-8')
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(html)
    }
    if (request.url === '/data') {
        response.writeHead(200, {
        })
        wait(2).then(
            () => {
                response.end('success')
            }
        )
    }

}).listen(8888)
console.log('serve lintening on 8888')