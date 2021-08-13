const pg = require('pg');
const pool = new pg.Pool({
    host:'localhost',
    port: 6432,
    database: 'socialnetwork',
    user: 'sg',
    password: 'Rockwell123'
});

const rows = pool.query('select * from posts;').then( (rows) => console.log(rows.rows[0]) );
//console.log(typeof(rows));