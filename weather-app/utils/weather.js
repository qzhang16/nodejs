//const url = 'http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=Shanghai&units=f'
const request = require('request');

const weather = (address,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=' + encodeURIComponent(address) + '&units=m';
    request({
        url,
        json: true
    },(error,{body} = {}) => {
        if (error) {
            callback(error);
        } else if (body.error) {
            callback('Unable to find the location !');
        }
        else {
            //console.log(response.body.current.weather_descriptions[0] + '. Current is ' + response.body.current.temperature + ' , while feels like ' + response.body.current.feelslike);
            callback(null,{weather_description: body.current.weather_descriptions[0], temperature: body.current.temperature, feelslike: body.current.feelslike});
        }
    });
};

module.exports = weather;