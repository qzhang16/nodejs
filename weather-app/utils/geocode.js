const request = require('request');
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicXpoYW5nMTYiLCJhIjoiY2tzNzVweHRzMGpjZTJucGx2N3JtNGdqbiJ9.OLYepTLyNd9hCpv-03TbDQ&limit=1';
    request({
        url,
        json: true
    },(error,{body}={}) => {
        if (error) {
            //console.log('Unable to check the mapbox service !')
            callback(error);
        } else if (body.features.length == 0) {
            //console.log('Unable to find the location : ', response.body.query);
            callback('Unable to find the location : ' + body.query);
        }
        else {
        // const longitude = response.body.features[0].center[0];
        // const latitude = response.body.features[0].center[1];
        // console.log(response.body.features[0].place_name );
        // console.log('longitude: '+ longitude , ' latitude: ' + latitude);
        callback(null,{ latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
        location: body.features[0].place_name });
        }
    })
};

module.exports = geocode;