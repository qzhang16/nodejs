const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=Shanghai&units=f';
const request = http.request(url,(response)=>{
    let data = '';
    response.on('data',(chunk) => {
        data = data + chunk.toString();
    });

    response.on('end',()=> {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log('An error ',error);
});

request.end();