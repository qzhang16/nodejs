setTimeout( () => process.exit(),2000);
process.on('exit', () => {
    console.log('bye bye');
})
console.log('welcome !');