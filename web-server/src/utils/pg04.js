const { Pool, Client } = require('pg')
const connectionString = 'postgresql://sg:Rockwell123@localhost:6432/socialnetwork'
const pool = new Pool({
  connectionString
})
pool.query('SELECT * from users', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})