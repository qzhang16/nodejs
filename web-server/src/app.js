const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();

//setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../templates/views')); // <project>/views is the default for hbs
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

//setup static path
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

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'help from Thingworx Naive',
        name: 'Thingworx Naive'
    });
});

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About me',
        name: 'Thingworx Naive'
    });
});

app.get('/weather',(req,res) => {
    res.send({location: 'Shanghai', weather: 'mist'});
});

app.get('/product',(req,res) => {
    if (! req.query.search) {
        res.send({error: 'you must provide a search term.'});
    } else {
        console.log(req.query.search);
        res.send([{name: "Game1",rating:4},{name: "Game2",rating:5}]);
    }
    

});

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        name: 'Qiang',
        errorMessage: 'Help Page not found '
    });
});

app.get('*',(req,res) => {
    res.render('404',{
        title: '404',
        name: 'Qiang',
        errorMessage: 'Page not found '
    });
});

app.listen(3000,() => {
    console.log(' Express server is listening on port 3000...');
});