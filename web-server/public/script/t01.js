console.log('client side java script loaded.');
//fetch('http://api.weatherstack.com/current?access_key=1e80b9c08c072da0ac94d104df66b443&query=Shanghai').then((response) =>{
// fetch('http://localhost:3000/weather?address=Shanghai').then((response) =>{    
//    response.json().then((data) => {
//        if (data.error) {
//            console.log(data.error)
//        } else {
//         console.log(data);
//        }

//     });
// //  response.text().then((data) => {
// //      console.log(data);
// //  })
// });


const weatherForm = document.querySelector('form');
const search = document.querySelector('form input');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    console.log('test...',search.value);
    if (! search.value) {
        msg2.textContent = '';
        return msg1.textContent = 'please provide a valid location for weather check.';
    }
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) =>{    
        response.json().then((data) => {
            if (data.error) {
                //console.log(data.error)
                msg1.textContent = data.error;
                msg2.textContent = '';
            } else {
             //console.log(data);
             msg1.textContent = data.location;
             msg2.textContent = data.weather_description;
            }
     
         });
     //  response.text().then((data) => {
     //      console.log(data);
     //  })
     });

});
