
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const argv01 = process.argv;
if ( argv01.length != 3) {
    console.log('Usage: node app.js <city>');
} else {
    geocode(argv01[2],(error,{latitude,longitude,location} = {} ) => { //function parameter default value for object destruction.
            if (error) {
                console.log(error);
            } else {
                console.log(latitude, longitude,location);
                weather(latitude+','+longitude,(error,data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
}

// geocode('Shanghai',(error,data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data.latitude, data.longitude,data.location);
//         weather(data.latitude+','+data.longitude,(error,data) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(data);
//             }
//         });
//     }
// });

