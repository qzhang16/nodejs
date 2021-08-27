const http = require('http');
const url = require('url');

const server = http.createServer();
server.on('request', (req,res) => {
    //console.log(req);
    const pss = url.parse(req.url,true);
    if (pss.pathname == '/metadata') {
        const {id} = pss.query;
        console.log(id);
        console.log(req.headers);
        req.on('data', (chunk) => {
            console.log('A chunk of data coming...\n');
            console.log(chunk.toString().slice(50,200));
        }).on('end',() => {
            console.log('finish data upload.');
        });

        res.end(JSON.stringify({a:id}));
    } else {
        res.end(JSON.stringify({a:99}));
    }
    
});
server.listen(8111);