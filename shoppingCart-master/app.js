const http = require('http');
const fs = require('fs')
http.createServer((request, response) => {
    let html = fs.readFileSync('cart.html', 'utf-8');
    let url = request.url;
    if (url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }
    if (url !== '/') {
        let surl = '.' + url;
        let type = surl.substr(surl.lastIndexOf(".") + 1, surl.length)

        console.log(surl);
        response.writeHead(200, {
            // 'Content-Type': 'text/'+type
        })
        let data = fs.readFileSync(surl);
        response.end(data)

    }
}).listen(8888)