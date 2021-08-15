const { Pool } = require('pg')
const connectionString = 'postgresql://sg:Rockwell123@localhost:6432/socialnetwork'
const pool = new Pool({
  connectionString
})
//const pool = new Pool()
// pool.query('SELECT * FROM users WHERE id > $1', [1], (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('user:', res.rows[0])
// })

pool.query('select current_timestamp',(err,res) => {
    console.log(res.rows[0]);
    console.log(new Date());
    console.log(process.env.TZ);
});

pool.end();

// Single query
// If you don't need a transaction or you just need to run a single query, 
// the pool has a convenience method to run a query on any available client in the pool.
//  This is the preferred way to query with node-postgres if you can as it removes the risk of leaking a client.