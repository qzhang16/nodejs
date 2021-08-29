const server = require('net').createServer();
server.on('connection', socket => {
    console.log('client connected.');
    socket.write('welcome new client !');
    socket.on('data', data => {
        console.log('data is ', data);
        socket.write(data);
    });
    socket.on('end', () => {
        console.log('client disconnected.');
    })
});

server.listen(8800, () => {
    console.log('server is running on 8800');
});
