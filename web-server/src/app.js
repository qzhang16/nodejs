const path = require('path')
const express = require('express');
const app = express();

// console.log(__dirname,__filename);
// console.log(path.join(__dirname,'../public'));
app.use(express.static(path.join(__dirname,'../public')));

//app.com 
//app.com/help
//app.com/about
//app.com/*

// app.get('',(req,res)=>{
//     res.send('<h1>welcome express world !</h1>');
// });

// app.get('/help',(req,res) => {
//     res.send([{name: 'Andrew',age:20},{name: 'Mike', age: 30}]);
// });

// app.get('/about',(req,res) => {
//     res.send('<h1>this is from express dev test. </h1>');
// });

app.get('/weather',(req,res) => {
    res.send({location: 'Shanghai', weather: 'mist'});
});

app.listen(3000,() => {
    console.log(' Express server is listening on port 3000...');
});