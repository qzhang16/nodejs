const http = require('http');
const server = http.createServer((req,res) => {
    res.end(JSON.stringify({name: 'Qiang'}));
})
server.listen(4242,() => {
    console.log('server is listening on 4242...');
})