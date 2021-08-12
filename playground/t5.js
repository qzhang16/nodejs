setTimeout(() => {
    console.log('Two seconds up !')
},2000);

const names = ['Andrew','Qiang','Jen','Jess'];
const shortNames = names.filter((name) => {
    return name.length < 4;
})

if (shortNames.length == 0 ) {
    console.log(' No names is shorter than 4 !');
} else {
    console.log(shortNames);
}

const geocode = (address,callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    };
    setTimeout(()=>{
        callback(data);
    },3000);
    
};

geocode('Philadelphia',(data1) => {
    console.log(data1);
});


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    },2000)
};

add(1,3, (x) => console.log(x));