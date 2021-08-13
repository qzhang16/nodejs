const path = require('path')
const express = require('express');
const app = express();

app.set('view engine','hbs');

// console.log(__dirname,__filename);
// console.log(path.join(__dirname,'../public'));
app.use(express.static(path.join(__dirname,'../public')));

//app.com 
//app.com/help
//app.com/about
//app.com/*

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'Qiang'
    });
});

// app.get('/help',(req,res) => {
//     res.send([{name: 'Andrew',age:20},{name: 'Mike', age: 30}]);
// });

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About me',
        name: 'Thingworx Naive'
    });
});

app.get('/weather',(req,res) => {
    res.send({location: 'Shanghai', weather: 'mist'});
});

app.listen(3000,() => {
    console.log(' Express server is listening on port 3000...');
});