const http = require('http')
http.createServer((request,response)=>{
    console.log('request come',request.url);
    response.writeHead(200,{
        // 'Content-Type': 'text/html',
    })
    // setArray().then(
    //     ()=>{
    //         response.end(arrayA)
    //     }
    // )
            response.end('[1,2]')

    
}).listen(8888)
let arrayA = [];
let setArray = ()=>{

    return new Promise((reslove,reject)=>{
        for(let i=0;i++;i<1000){
            arrayA[i].push(Math.ceil(Math.random()*10))
            // if(i == 1000){
                // }
            };
            reslove()

    })
}
