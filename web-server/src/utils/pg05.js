const { Pool, Client } = require('pg')
const connectionString = 'postgresql://sg:Rockwell123@localhost:6432/socialnetwork'
const pool = new Pool({
  connectionString
})

//prepared statement.  parse once ,reuse the plan later.
//"name" will tell postgres to prepare the statement.  -- normally, this applies for report, not very good for simple query.
//without "name", it is just a normal parameterized sql statement
const query = {
    name: 'query01',
    text: 'select * from users where id > $1',
    values: [8]
}
pool.query(query, (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString
})
client.connect()
client.query(query, (err, res) => {
  console.log(err, res)
  client.end()
})