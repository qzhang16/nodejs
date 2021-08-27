//import {createServer} from 'http';
import http from 'http';
const server = http.createServer((req,res) => {
    res.end('welcome node js module by mjs. Good again.');
})
server.listen(4242,() => {
    console.log('server is on 4242...');
})