const {Pool,Client} = require('pg');
const  config = {
    user: "sg",
    host: 'localhost',
    database: "socialnetwork",
    password: "Rockwell123",
    port: 6432,

    // 扩展属性
    max: 20, // 连接池最大连接数
    idleTimeoutMillis: 3000, // 连接最大空闲时间 3s
}
const pool = new Pool(config);
pool.query('select * from users',(err,res) => {
    console.log(err,res);
    pool.end();

});

// in case without the config 
//PGUSER=sg \
//PGHOST=localhost \
//PGPASSWORD=Rockwell123 \
//PGDATABASE=socialnetwork \
//PGPORT=6432 \
// node script.js