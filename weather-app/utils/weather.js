//const url = 'http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=Shanghai&units=f'
const request = require('request');

const weather = (address,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=' + encodeURIComponent(address) + '&units=m';
    request({
        url: url,
        json: true
    },(error,response) => {
        if (error) {
            callback(error);
        } else if (response.body.error) {
            callback('Unable to find the location !');
        }
        else {
            //console.log(response.body.current.weather_descriptions[0] + '. Current is ' + response.body.current.temperature + ' , while feels like ' + response.body.current.feelslike);
            callback(null,{weather_description: response.body.current.weather_descriptions[0], temperature: response.body.current.temperature, feelslike: response.body.current.feelslike});
        }
    });
};

module.exports = weather;